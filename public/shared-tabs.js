(function () {
  /* =========================================================
     STEP COMPLETION TOGGLING
     ========================================================= */
  var steps = document.querySelectorAll('.step, .step-item');
  if (steps && steps.length > 0) {
    steps.forEach(function (step) {
      step.addEventListener('click', function (e) {
        // Prevent toggling if user clicked an input field, button, or link
        var targetTag = e.target.tagName.toLowerCase();
        if (
          targetTag === 'input' ||
          targetTag === 'textarea' ||
          targetTag === 'button' ||
          targetTag === 'a' ||
          e.target.closest('button, a, input, textarea')
        ) {
          return;
        }
        step.classList.toggle('completed');
      });
    });
  }

  /* =========================================================
     WHY PANEL COLLAPSE / EXPAND
     ========================================================= */
  var sections        = document.getElementById('sections');
  var whyPanel        = document.getElementById('whyPanel');
  var whyHeaderToggle = document.getElementById('whyHeaderToggle') || document.getElementById('whyToggle');
  var whyHeaderIcon   = document.getElementById('whyHeaderIcon') || document.getElementById('whyToggleArrow');
  var whyHeaderLabel  = document.getElementById('whyHeaderLabel') || document.getElementById('whyToggleLabel');
  var whySideToggle   = document.getElementById('whySideToggle');

  if (sections && whyPanel && whySideToggle) {
    var isCollapsed = false;

    function applyWhyState() {
      if (isCollapsed) {
        whyPanel.classList.add('why--collapsed');
        sections.classList.add('sections--why-collapsed');
        whySideToggle.classList.add('why-side-toggle--visible');
        if (whyHeaderIcon) whyHeaderIcon.textContent = '▶';
        if (whyHeaderLabel) whyHeaderLabel.textContent = 'Show';
      } else {
        whyPanel.classList.remove('why--collapsed');
        sections.classList.remove('sections--why-collapsed');
        whySideToggle.classList.remove('why-side-toggle--visible');
        if (whyHeaderIcon) whyHeaderIcon.textContent = '▼'; // Down arrow when expanded
        if (whyHeaderLabel) whyHeaderLabel.textContent = 'Hide';
      }
    }

    if (whyHeaderToggle) {
      whyHeaderToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        isCollapsed = !isCollapsed;
        applyWhyState();
      });
    }

    if (whySideToggle) {
      whySideToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        isCollapsed = false; // Side toggle always expands
        applyWhyState();
      });
    }

    // Initialize state
    applyWhyState();
  }

  /* =========================================================
     COPY-TO-CLIPBOARD BUTTONS
     ========================================================= */
  var statusEl = document.getElementById('copyStatus');
  var copyButtons = document.querySelectorAll('.copy-btn');

  function getCommandText(target) {
    // 1. Allow pages to inject a global copy text function for dynamic scenarios
    if (typeof window.getCustomCopyText === 'function') {
      var customText = window.getCustomCopyText(target);
      if (customText) return customText;
    }

    // 2. Fallback to hardcoded examples for legacy pages
    if (target === 'eks') {
      return [
        'aws eks update-kubeconfig --name <your-eks-cluster-name> --region <aws-region>',
        'kubectl get nodes'
      ].join('\n');
    }
    if (target === 'storage') {
      return [
        'kubectl get storageclass',
        'kubectl get pv'
      ].join('\n');
    }
    
    // 3. Optional fallback to pulling static text direct from the div ID
    var targetEl = document.getElementById(target);
    if (targetEl) {
      return targetEl.innerText.trim();
    }

    return '';
  }

  function showStatus(message, isError) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.style.color = isError ? '#f97373' : 'var(--success)';
    statusEl.classList.add('visible');
    clearTimeout(showStatus._timer);
    showStatus._timer = setTimeout(function () {
      statusEl.classList.remove('visible');
    }, 1800);
  }

  function legacyCopy(text, onSuccess, onError) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      var successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) onSuccess();
      else onError();
    } catch (e) {
      document.body.removeChild(textarea);
      onError();
    }
  }

  function copyToClipboard(text, onSuccess, onError) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess, function () {
        legacyCopy(text, onSuccess, onError);
      });
    } else {
      legacyCopy(text, onSuccess, onError);
    }
  }

  if (copyButtons && copyButtons.length > 0) {
    copyButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var target = btn.getAttribute('data-copy-target');
        var text = getCommandText(target);
        
        if (!text) return;

        var labelEl = btn.querySelector('.copy-label');
        var originalLabel = labelEl ? labelEl.textContent : '';

        copyToClipboard(
          text,
          function () {
            if (labelEl) labelEl.textContent = 'Copied';
            showStatus('Content copied to clipboard.');
            setTimeout(function () {
              if (labelEl) labelEl.textContent = originalLabel || 'Copy';
            }, 1200);
          },
          function () {
            showStatus('Unable to copy automatically. Please copy manually.', true);
          }
        );
      });
    });
  }

  /* =========================================================
     VIEW TOGGLE (generic: Windows/macOS, GUI/CLI, etc.)
     ========================================================= */
  var viewButtons = document.querySelectorAll('.toggle-btn[data-view]');
  var viewPanels  = document.querySelectorAll('[data-view-panel]');

  if (viewButtons.length > 0 && viewPanels.length > 0) {
    viewButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();

        var targetView = btn.getAttribute('data-view');
        if (!targetView) return;

        // Update button active state
        viewButtons.forEach(function (b) {
          var isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        // Show the matching panel, hide the others
        viewPanels.forEach(function (panel) {
          var panelView = panel.getAttribute('data-view-panel');
          if (panelView === targetView) {
            panel.style.display = '';
          } else {
            panel.style.display = 'none';
          }
        });
      });
    });
  }
})();

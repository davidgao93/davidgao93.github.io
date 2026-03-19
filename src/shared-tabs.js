(function () {
  /* =========================================================
     STEP COMPLETION TOGGLING
     ========================================================= */
  var steps = document.querySelectorAll('.step');
  if (steps && steps.length > 0) {
    steps.forEach(function (step) {
      step.addEventListener('click', function () {
        step.classList.toggle('completed');
      });
    });
  }

  /* =========================================================
     WHY PANEL COLLAPSE / EXPAND
     ========================================================= */
  var sections        = document.getElementById('sections');
  var whyPanel        = document.getElementById('whyPanel');
  var whyHeaderToggle = document.getElementById('whyHeaderToggle');
  var whyHeaderIcon   = document.getElementById('whyHeaderIcon');
  var whyHeaderLabel  = document.getElementById('whyHeaderLabel');
  var whySideToggle   = document.getElementById('whySideToggle');

  // Only enable the "why" behavior if core elements exist
  if (sections && whyPanel && whyHeaderIcon && whyHeaderLabel && whySideToggle) {
    var isCollapsed = false;

    function applyWhyState() {
      if (isCollapsed) {
        whyPanel.classList.add('why--collapsed');
        sections.classList.add('sections--why-collapsed');
        whySideToggle.classList.add('why-side-toggle--visible');
        whyHeaderIcon.textContent = '▶';
        whyHeaderLabel.textContent = 'Show';
      } else {
        whyPanel.classList.remove('why--collapsed');
        sections.classList.remove('sections--why-collapsed');
        whySideToggle.classList.remove('why-side-toggle--visible');
        whyHeaderIcon.textContent = '▶';
        whyHeaderLabel.textContent = 'Hide';
      }
    }

    if (whyHeaderToggle) {
      whyHeaderToggle.addEventListener('click', function () {
        isCollapsed = !isCollapsed;
        applyWhyState();
      });
    }

    if (whySideToggle) {
      whySideToggle.addEventListener('click', function () {
        isCollapsed = false;
        applyWhyState();
      });
    }

    // Initial state
    applyWhyState();
  }

  /* =========================================================
     COPY-TO-CLIPBOARD BUTTONS
     ========================================================= */
  var statusEl = document.getElementById('copyStatus');
  var copyButtons = document.querySelectorAll('.copy-btn');

  function getCommandText(target) {
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
      if (successful) {
        onSuccess();
      } else {
        onError();
      }
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
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-copy-target');
        var text = getCommandText(target);
        if (!text) return;

        var labelEl = btn.querySelector('.copy-label');
        var originalLabel = labelEl ? labelEl.textContent : '';

        copyToClipboard(
          text,
          function () {
            if (labelEl) labelEl.textContent = 'Copied';
            showStatus(
              'Commands copied. Paste into your terminal to run the check.'
            );
            setTimeout(function () {
              if (labelEl) labelEl.textContent = originalLabel || 'Copy';
            }, 1200);
          },
          function () {
            showStatus(
              'Unable to copy automatically. Please select and copy manually.',
              true
            );
          }
        );
      });
    });
  }
})();
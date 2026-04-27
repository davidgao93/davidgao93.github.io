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
        if (targetTag === 'input' || targetTag === 'textarea' || targetTag === 'button' || targetTag === 'a' || e.target.closest('button, a, input, textarea')) {
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
    var whyCollapseTimer = null;

    /* Set initial inline styles so the panel is in a known state */
    function initWhyPanel() {
      whyPanel.style.overflow = 'hidden';
      whyPanel.style.transition = 'none';
    }

    function collapseWhyPanel(animate) {
      whyPanel.classList.add('why--collapsed');
      if (whyHeaderIcon) {
        whyHeaderIcon.textContent = '▼';
        whyHeaderIcon.classList.add('why-icon--collapsed');
      }
      if (whyHeaderLabel) whyHeaderLabel.textContent = 'Show';

      if (!animate) {
        whyPanel.style.transition = 'none';
        whyPanel.style.maxHeight = '0px';
        whyPanel.style.opacity = '0';
        sections.classList.add('sections--why-collapsed');
        whySideToggle.classList.add('why-side-toggle--visible');
        return;
      }

      /* Measure actual height, then animate from it down to 0 */
      var fullHeight = whyPanel.scrollHeight;
      whyPanel.style.transition = 'none';
      whyPanel.style.maxHeight = fullHeight + 'px';
      whyPanel.style.opacity = '1';

      /* Force reflow so the browser registers the starting value */
      void whyPanel.offsetHeight;

      whyPanel.style.transition = 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease';
      whyPanel.style.maxHeight = '0px';
      whyPanel.style.opacity = '0';

      /* Swap grid layout after the panel has nearly finished collapsing */
      clearTimeout(whyCollapseTimer);
      whyCollapseTimer = setTimeout(function () {
        sections.classList.add('sections--why-collapsed');
        whySideToggle.classList.add('why-side-toggle--visible');
      }, 340);
    }

    function expandWhyPanel(animate) {
      whyPanel.classList.remove('why--collapsed');
      sections.classList.remove('sections--why-collapsed');
      whySideToggle.classList.remove('why-side-toggle--visible');
      if (whyHeaderIcon) {
        whyHeaderIcon.textContent = '▼';
        whyHeaderIcon.classList.remove('why-icon--collapsed');
      }
      if (whyHeaderLabel) whyHeaderLabel.textContent = 'Hide';

      if (!animate) {
        whyPanel.style.transition = 'none';
        whyPanel.style.maxHeight = '';
        whyPanel.style.opacity = '1';
        return;
      }

      /* Let the grid reflow into 2 columns first, then measure and animate in */
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          var fullHeight = whyPanel.scrollHeight;
          whyPanel.style.transition = 'none';
          whyPanel.style.maxHeight = '0px';
          whyPanel.style.opacity = '0';

          void whyPanel.offsetHeight;

          whyPanel.style.transition = 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease';
          whyPanel.style.maxHeight = fullHeight + 'px';
          whyPanel.style.opacity = '1';

          /* After transition, remove inline max-height so the panel can resize naturally */
          function onTransitionEnd(e) {
            if (e.propertyName !== 'max-height') return;
            whyPanel.style.transition = 'none';
            whyPanel.style.maxHeight = '';
            whyPanel.removeEventListener('transitionend', onTransitionEnd);
          }
          whyPanel.addEventListener('transitionend', onTransitionEnd);
        });
      });
    }

    function applyWhyState(animate) {
      if (isCollapsed) {
        collapseWhyPanel(animate);
      } else {
        expandWhyPanel(animate);
      }
    }

    if (whyHeaderToggle) {
      whyHeaderToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        isCollapsed = !isCollapsed;
        applyWhyState(true);
      });
    }

    if (whySideToggle) {
      whySideToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        isCollapsed = false; // Side toggle always expands
        applyWhyState(true);
      });
    }

    // Initialize state (no animation on load)
    initWhyPanel();
    applyWhyState(false);
  }

  /* =========================================================
     COPY-TO-CLIPBOARD BUTTONS
     ========================================================= */
  var copyButtons = document.querySelectorAll('.copy-btn');

  function showToast(message, isError) {
    var existing = document.getElementById('cmc-toast');
    if (existing) {
      clearTimeout(existing._hideTimer);
      existing.remove();
    }

    var toast = document.createElement('div');
    toast.id = 'cmc-toast';
    toast.textContent = message;

    var bg = isError ? '#ef4444' : '#1aab52';
    toast.style.cssText = [
      'position:fixed',
      'bottom:20px',
      'left:50%',
      'transform:translateX(-50%) translateY(12px)',
      'padding:8px 18px',
      'border-radius:999px',
      'font-size:12.5px',
      'font-weight:600',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      'color:#fff',
      'background:' + bg,
      'box-shadow:0 4px 20px rgba(0,0,0,0.18)',
      'z-index:9999',
      'opacity:0',
      'transition:opacity 0.18s ease,transform 0.18s ease',
      'pointer-events:none',
      'white-space:nowrap'
    ].join(';');

    document.body.appendChild(toast);

    /* Trigger entrance */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
      });
    });

    /* Exit after delay */
    toast._hideTimer = setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(12px)';
      setTimeout(function () { if (toast.parentNode) toast.remove(); }, 200);
    }, 1800);
  }

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
            btn.classList.add('copy-btn--success');
            showToast('Content copied to clipboard.');
            setTimeout(function () {
              if (labelEl) labelEl.textContent = originalLabel || 'Copy';
              btn.classList.remove('copy-btn--success');
            }, 1200);
          },
          function () {
            showToast('Unable to copy automatically. Please copy manually.', true);
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

  /* =========================================================
     PERSISTENCE, PROGRESS & QUALITY-OF-LIFE
     ========================================================= */
  (function () {
    var pageKey = window.location.pathname.replace(/\W+/g, '_');

    /* --- localStorage helpers (silent-fail) --- */
    function lsGet(key) {
      try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
    }
    function lsSet(key, val) {
      try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
    }

    /* --- Gather steps --- */
    var stepEls = Array.prototype.slice.call(
      document.querySelectorAll('.steps-list .step, .steps-list .step-item')
    );
    if (stepEls.length === 0) return;

    /* ---------- PROGRESS BADGE ---------- */
    var progressBadge = null;

    function injectProgressBadge() {
      var titleEl = document.querySelector('.steps-panel .section-title, .steps .section-title');
      if (!titleEl) return;
      progressBadge = document.createElement('span');
      progressBadge.className = 'progress-badge';
      titleEl.appendChild(progressBadge);
    }

    function updateProgressBadge() {
      if (!progressBadge) return;
      var done = document.querySelectorAll(
        '.steps-list .step.completed, .steps-list .step-item.completed'
      ).length;
      progressBadge.textContent = done + '\u202f/\u202f' + stepEls.length;
      progressBadge.classList.toggle('progress-badge--complete', done === stepEls.length);
    }

    /* ---------- ALL-DONE BANNER ---------- */
    var allDoneBanner = null;

    function injectAllDoneBanner() {
      var list = document.querySelector('.steps-list');
      if (!list) return;
      allDoneBanner = document.createElement('div');
      allDoneBanner.className = 'all-done-banner';
      allDoneBanner.innerHTML =
        '<span class="all-done-icon" aria-hidden="true">&#10003;</span>' +
        '<span>All steps complete \u2014 you\'re ready to continue!</span>';
      list.parentNode.insertBefore(allDoneBanner, list.nextSibling);
    }

    function updateAllDoneBanner() {
      if (!allDoneBanner) return;
      var done = document.querySelectorAll(
        '.steps-list .step.completed, .steps-list .step-item.completed'
      ).length;
      allDoneBanner.classList.toggle('all-done-banner--visible', done === stepEls.length);
    }

    /* ---------- STEP PERSISTENCE + SCROLL-TO-NEXT ---------- */
    var stepsKey = 'cmc_steps_' + pageKey;

    function saveStepStates() {
      var completed = [];
      stepEls.forEach(function (s, i) {
        if (s.classList.contains('completed')) completed.push(i);
      });
      lsSet(stepsKey, completed);
    }

    function loadStepStates() {
      var saved = lsGet(stepsKey);
      if (!Array.isArray(saved)) return;
      saved.forEach(function (i) {
        if (stepEls[i]) stepEls[i].classList.add('completed');
      });
    }

    function scrollToNextStep(el) {
      var next = el.nextElementSibling;
      while (next && !next.classList.contains('step') && !next.classList.contains('step-item')) {
        next = next.nextElementSibling;
      }
      if (next) {
        setTimeout(function () {
          next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 280);
      }
    }

    stepEls.forEach(function (step) {
      step.addEventListener('click', function (e) {
        var tag = e.target.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'button' || tag === 'a' ||
            e.target.closest('button, a, input, textarea')) return;
        /* Run after the primary toggle listener (same tick) has applied the class */
        setTimeout(function () {
          saveStepStates();
          updateProgressBadge();
          updateAllDoneBanner();
          // if (step.classList.contains('completed')) {
          //   scrollToNextStep(step);
          // }
        }, 0);
      });
    });

    /* ---------- INPUT PERSISTENCE ---------- */
    function initInputPersistence() {
      var inputs = document.querySelectorAll('.input[id], .input[name]');
      inputs.forEach(function (input) {
        var id = input.id || input.getAttribute('name');
        var key = 'cmc_input_' + pageKey + '_' + id;
        var saved = lsGet(key);
        if (saved && typeof saved === 'string') {
          input.value = saved;
          /* Re-fire input event so any live code-block updaters re-render */
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.addEventListener('input', function () {
          lsSet(key, input.value);
        });
      });
    }

    /* ---------- BOOT ---------- */
    loadStepStates();
    injectProgressBadge();
    injectAllDoneBanner();
    updateProgressBadge();
    updateAllDoneBanner();
    initInputPersistence();
  }());

  /* =========================================================
     SCREENSHOT POPOVER
     ========================================================= */
  (function () {
    var btns = document.querySelectorAll('.screenshot-btn');
    if (!btns.length) return;

    var SVG_IMAGE =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>' +
      '<circle cx="8.5" cy="8.5" r="1.5"></circle>' +
      '<polyline points="21 15 16 10 5 21"></polyline>' +
      '</svg>';

    var SVG_EXTERNAL =
      '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>' +
      '<polyline points="15 3 21 3 21 9"></polyline>' +
      '<line x1="10" y1="14" x2="21" y2="3"></line>' +
      '</svg>';

    btns.forEach(function (btn) {
      var src = btn.dataset.src || '';
      var cap = btn.dataset.caption || '';
      if (!src) return;

      /* Replace emoji label with clean SVG icon */
      btn.innerHTML = SVG_IMAGE + ' Preview';

      /* Wrap button in a relative-positioned anchor span */
      var anchor = document.createElement('span');
      anchor.className = 'screenshot-anchor';
      btn.parentNode.insertBefore(anchor, btn);
      anchor.appendChild(btn);

      /* Build popover card */
      var popover = document.createElement('div');
      popover.className = 'screenshot-popover';
      popover.setAttribute('role', 'tooltip');

      var img = document.createElement('img');
      img.className = 'screenshot-popover-img';
      img.alt = cap || 'Screenshot';
      /* src set lazily on first hover */
      popover.appendChild(img);

      if (cap) {
        var capEl = document.createElement('div');
        capEl.className = 'screenshot-popover-cap';
        capEl.textContent = cap;
        popover.appendChild(capEl);
      }

      var foot = document.createElement('div');
      foot.className = 'screenshot-popover-foot';
      var link = document.createElement('a');
      link.className = 'screenshot-newtab-link';
      link.href = src;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = 'Open in new tab ' + SVG_EXTERNAL;
      foot.appendChild(link);
      popover.appendChild(foot);
      /* Append to body so the popover escapes all stacking contexts and overflow clips */
      document.body.appendChild(popover);

      var imgLoaded = false;
      var hideTimer = null;

      function show() {
        /* Lazy-load image on first hover */
        if (!imgLoaded) { img.src = src; imgLoaded = true; }
        clearTimeout(hideTimer);

        var ar = anchor.getBoundingClientRect();
        var pw = 760;  /* matches CSS width */
        var ph = 548;  /* img 464 + cap ~30 + footer ~34 + padding 20 */
        var vw = window.innerWidth;
        var vh = window.innerHeight;

        /* ── Vertical: above by default, flip below if near top of viewport ── */
        var goBelow  = ar.top < ph + 16;
        var fixedTop = goBelow ? ar.bottom + 10 : ar.top - ph - 10;
        fixedTop = Math.max(8, Math.min(fixedTop, vh - ph - 8));

        /* ── Horizontal: center on button, clamp to viewport ── */
        var fixedLeft = ar.left + (ar.width / 2) - (pw / 2);
        fixedLeft = Math.max(8, Math.min(fixedLeft, vw - pw - 8));

        popover.style.top    = fixedTop + 'px';
        popover.style.left   = fixedLeft + 'px';
        popover.style.bottom = 'auto';
        popover.style.right  = 'auto';

        /* ── Animate in: slide from direction of origin ── */
        var fromY = goBelow ? '-6px' : '6px';
        popover.style.transform    = 'translateY(' + fromY + ')';
        popover.style.opacity      = '0';
        void popover.offsetHeight; /* force reflow so transition fires */
        popover.style.transform    = 'translateY(0)';
        popover.style.opacity      = '1';
        popover.style.pointerEvents = 'auto';
      }

      function scheduleHide() {
        hideTimer = setTimeout(function () {
          popover.style.opacity      = '0';
          popover.style.pointerEvents = 'none';
        }, 120);
      }

      btn.addEventListener('mouseenter', show);
      btn.addEventListener('mouseleave', scheduleHide);
      popover.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
      popover.addEventListener('mouseleave', scheduleHide);

      /* Touch / keyboard fallback: click opens image directly in new tab */
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        window.open(src, '_blank', 'noopener,noreferrer');
      });
    });
  }());

})();
/**
 * PrimeStay — Interactive Scripts & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar with Scroll Glass Effect
  const header = document.querySelector('.header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  });

  // Back to top click handler
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navContainer = document.querySelector('.nav-container');

  mobileToggle?.addEventListener('click', () => {
    document.body.classList.toggle('mobile-menu-active');
  });

  // Close mobile nav when clicking a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('mobile-menu-active');
    });
  });

  // 3. Stats Counter Animation using IntersectionObserver
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const countUp = (element) => {
    const target = parseFloat(element.getAttribute('data-target'));
    const isDecimal = element.getAttribute('data-decimal') === 'true';
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      if (isDecimal) {
        element.textContent = currentVal.toFixed(1);
      } else if (target >= 1000) {
        element.textContent = Math.floor(currentVal).toLocaleString();
      } else {
        element.textContent = Math.floor(currentVal);
      }

      if (frame >= totalFrames) {
        clearInterval(counter);
        element.textContent = isDecimal ? target.toFixed(1) : (target >= 1000 ? target.toLocaleString() : target);
      }
    }, frameRate);
  };

  const observerOptions = {
    threshold: 0.3
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statNumbers.forEach(num => countUp(num));
        }
      });
    }, observerOptions);

    statsObserver.observe(statsSection);
  }

  // 4. Featured Projects / Case Studies Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      caseCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Dashboard Interactive Sidebar Menu
  const dashMenuItems = document.querySelectorAll('.dash-sidebar .dash-menu-item');
  dashMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      dashMenuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      showToast(`Navigated to ${item.textContent.trim()} view`);
    });
  });

  // 6. Toast Notification Helper
  function showToast(message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // 7. Interactive Form Submissions (CTA form & Contact forms & Newsletters)
  const handleForm = (formId, submitText, successMsg) => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.innerHTML = submitText;
        submitBtn.disabled = true;
      }
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }
        form.reset();
        showToast(successMsg);
      }, 900);
    });
  };

  handleForm('contactForm', 'Sending Request...', 'Thank you! Your demo request has been received. Our team will contact you shortly.');
  handleForm('contactFormPage', 'Securing Demo Slot...', 'Priority demo confirmed! A calendar invite and prep briefing have been emailed to you.');
  handleForm('ctaForm', 'Setting up...', 'Your 14-day free trial has been initiated! Check your email to set up your account.');

  // Generic handler for all newsletter forms
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our monthly property management newsletter.');
      form.reset();
    });
  });
});

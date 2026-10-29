/**
 * ABDUL KASIM AJMAL KHAN - PORTFOLIO INTERACTION ENGINE
 * Austin Werner Style Dual-Persona Toggle, Terminal Controls & Smooth UX
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. DUAL-PERSONA SWITCHER LOGIC
  const btnBackend = document.getElementById('btn-backend');
  const btnFullstack = document.getElementById('btn-fullstack');
  const dynamicHeadline = document.getElementById('dynamic-headline');
  const projectCards = document.querySelectorAll('.project-card');

  const modes = {
    backend: {
      headline: 'SCALABLE BACKEND APIS & DISTRIBUTED QUEUES',
      color: '#FF6D36', // Austin Werner Candidate Orange
      filter: 'backend'
    },
    fullstack: {
      headline: 'MODERN FULL-STACK APPS & AI ENGINE INTEGRATIONS',
      color: '#2BC6D9', // Austin Werner Company Cyan
      filter: 'fullstack'
    }
  };

  function setPersonaMode(modeKey) {
    const config = modes[modeKey];
    if (!config) return;

    if (modeKey === 'backend') {
      btnBackend.classList.add('active');
      btnBackend.setAttribute('aria-selected', 'true');
      btnFullstack.classList.remove('active');
      btnFullstack.setAttribute('aria-selected', 'false');
    } else {
      btnFullstack.classList.add('active');
      btnFullstack.setAttribute('aria-selected', 'true');
      btnBackend.classList.remove('active');
      btnBackend.setAttribute('aria-selected', 'false');
    }

    // Smoothly swap headline text
    dynamicHeadline.style.opacity = '0';
    dynamicHeadline.style.transform = 'translateY(6px)';

    setTimeout(() => {
      dynamicHeadline.textContent = config.headline;
      dynamicHeadline.style.color = config.color;
      dynamicHeadline.style.opacity = '1';
      dynamicHeadline.style.transform = 'translateY(0)';
    }, 180);

    // Filter or highlight relevant project cards
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (category === modeKey || modeKey === 'all') {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.borderColor = config.color;
      } else {
        card.style.opacity = '0.75';
        card.style.borderColor = 'var(--border-muted)';
      }
    });
  }

  if (btnBackend && btnFullstack) {
    btnBackend.addEventListener('click', () => setPersonaMode('backend'));
    btnFullstack.addEventListener('click', () => setPersonaMode('fullstack'));
  }

  // Set transition for dynamic headline
  if (dynamicHeadline) {
    dynamicHeadline.style.transition = 'opacity 0.25s ease, transform 0.25s ease, color 0.3s ease';
  }

  // 2. COPY EMAIL TO CLIPBOARD WITH MICRO-INTERACTION
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');

  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email') || 'abdulkasim.cs@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyText.textContent;
        copyText.textContent = '✓ Copied to Clipboard!';
        copyBtn.style.borderColor = '#10B981';
        copyBtn.style.color = '#10B981';

        setTimeout(() => {
          copyText.textContent = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyText.textContent = '✓ Copied to Clipboard!';
        setTimeout(() => {
          copyText.textContent = 'Copy Email Address';
        }, 2200);
      }
    });
  }

  // 3. INTERACTIVE CONTACT TRANSMISSION FORM
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      formStatus.className = 'form-status';
      formStatus.textContent = 'Transmitting message payload...';

      setTimeout(() => {
        formStatus.className = 'form-status success';
        formStatus.textContent = '✓ Message Transmitted! Abdul Kasim will respond within 24h.';
        contactForm.reset();

        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }, 700);
    });
  }

  // 4. MOBILE HAMBURGER MENU TOGGLE
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // 5. ACTIVE NAVIGATION OBSERVER ON SCROLL
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.aw-nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

});

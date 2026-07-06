'use strict';

// ─── EmailJS Config ────────────────────────────────────────────────────────
// HOW TO SET UP (free):
// 1. https://www.emailjs.com → create account
// 2. Add Email Service (Gmail) → copy Service ID
// 3. Create Template (use vars: {{from_name}} {{from_email}} {{company}} {{interest}} {{message}})
// 4. Account → API Keys → copy Public Key
// Read from Vite env vars if provided, otherwise fall back to the original
// placeholders so behavior is unchanged when no .env file is present.
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

// Ported verbatim from the original script.js. Instead of listening for
// DOMContentLoaded, this runs once after React has mounted the markup.
export default function initSite() {

  // ── Init EmailJS ──────────────────────────────────────────────────────────
  if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  // ── Navbar Scroll ─────────────────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Hamburger ─────────────────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Active nav on scroll ──────────────────────────────────────────────────
  const sections   = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navLinkEls.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  }, { passive: true });

  // ── Scroll Reveal ─────────────────────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ── Directional Reveal (left / right / scale) ─────────────────────────────
  const dirRevealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        dirRevealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-left, .reveal-right, .reveal-scale')
    .forEach(el => dirRevealObs.observe(el));

  // ── Animated Counters ─────────────────────────────────────────────────────
  function animateCounter(el, target) {
    let start = null;
    const dur = 1800;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.counter[data-target]').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target, 10));
        });
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.hero-trust, .stats-grid').forEach(el => el && counterObs.observe(el));

  // Stat bars
  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-bar-fill').forEach(bar => {
          const w = getComputedStyle(bar).getPropertyValue('--w').trim();
          bar.style.width = '0';
          setTimeout(() => { bar.style.width = w; }, 200);
        });
        statsObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const sg = document.querySelector('.stats-grid');
  if (sg) statsObs.observe(sg);

  // ── Scroll Progress Bar ───────────────────────────────────────────────────
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  // ── Mouse Glow Orb ────────────────────────────────────────────────────────
  const mouseGlow = document.querySelector('.mouse-glow');
  if (mouseGlow) {
    let glowX = 0, glowY = 0;
    document.addEventListener('mousemove', e => {
      glowX = e.clientX; glowY = e.clientY;
      mouseGlow.style.left = glowX + 'px';
      mouseGlow.style.top  = glowY + 'px';
    }, { passive: true });
  }

  // ── Magnetic Buttons ──────────────────────────────────────────────────────
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.28;
      const y = (e.clientY - r.top  - r.height / 2) * 0.28;
      btn.style.setProperty('transform', `translate(${x}px, ${y}px)`, 'important');
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('transform', '', 'important');
    });
  });

  // ── 3D Card Tilt ──────────────────────────────────────────────────────────
  if (!window.matchMedia('(pointer: coarse)').matches) { // skip on touch
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - 0.5) * 14;
        const y = ((e.clientY - r.top)  / r.height - 0.5) * 14;
        card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(8px)`;
        card.style.transition = 'transform 0.08s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';
      });
    });
  }

  // ── Ripple Effect on Buttons ──────────────────────────────────────────────
  document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', e => {
      const r      = btn.getBoundingClientRect();
      const size   = Math.max(r.width, r.height);
      const ripple = document.createElement('span');
      ripple.className  = 'ripple-wave';
      ripple.style.cssText = `width:${size}px;height:${size}px;` +
        `left:${e.clientX - r.left - size / 2}px;` +
        `top:${e.clientY  - r.top  - size / 2}px;`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // ── Canvas Particle Network ───────────────────────────────────────────────
  const pCanvas = document.getElementById('hero-particles');
  if (pCanvas) {
    const ctx = pCanvas.getContext('2d');
    let PW, PH;
    const PARTICLE_COUNT = 70;
    const LINK_DIST      = 140;
    let pts = [];

    function resizePC() {
      // Use getBoundingClientRect for accurate size (canvas uses CSS width/height)
      const rect = pCanvas.getBoundingClientRect();
      PW = pCanvas.width  = Math.round(rect.width)  || pCanvas.offsetWidth  || 800;
      PH = pCanvas.height = Math.round(rect.height) || pCanvas.offsetHeight || 400;
    }
    window.addEventListener('resize', resizePC, { passive: true });
    // Small delay so CSS has time to lay out the wrapper before we measure
    setTimeout(resizePC, 50);

    function mkPt() {
      return {
        x: Math.random() * PW, y: Math.random() * PH,
        vx: (Math.random() - 0.5) * 0.55, vy: (Math.random() - 0.5) * 0.55,
        r: Math.random() * 2 + 1, a: Math.random() * 0.35 + 0.1,
      };
    }
    for (let i = 0; i < PARTICLE_COUNT; i++) pts.push(mkPt());

    function drawParticles() {
      ctx.clearRect(0, 0, PW, PH);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > PW) p.vx *= -1;
        if (p.y < 0 || p.y > PH) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91,71,224,${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(91,71,224,${0.09 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  // ── Preloader ─────────────────────────────────────────────────────────────
  const preloader = document.getElementById('page-preloader');
  if (preloader) {
    const hideLoader = () => preloader.classList.add('hidden');
    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 300);
    } else {
      window.addEventListener('load', () => setTimeout(hideLoader, 350));
    }
    setTimeout(hideLoader, 2200); // hard fallback
  }

  // ── Hero Parallax on Scroll ────────────────────────────────────────────────
  const locoTitle = document.getElementById('loco-title');
  const locoDesc  = document.querySelector('.loco-desc');
  if (locoTitle || locoDesc) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (locoTitle) locoTitle.style.transform = `translateY(${y * 0.18}px)`;
      if (locoDesc)  locoDesc.style.transform  = `translateY(${y * 0.08}px)`;
    }, { passive: true });
  }

  // ── Locomotive Custom Cursor & Interactions ──────────────────────
  const cursor = document.getElementById('loco-cursor');
  if (cursor) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    (function renderCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    })();

    const hoverTaps = document.querySelectorAll('a, button, .loco-title');
    hoverTaps.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  // ── Chat Widget ───────────────────────────────────────────────────────────
  let chatInfoCollected = false;
  const chatWidget  = document.getElementById('chat-widget');
  const chatFab     = document.getElementById('chat-fab');
  const chatBadge   = document.getElementById('chat-fab-badge');
  const chatMsgsBox = document.getElementById('chat-messages');

  function openChat() {
    chatWidget.style.display = 'block';
    chatFab.style.display    = 'none';
    if (chatBadge) chatBadge.style.display = 'none';
    const inp = document.getElementById('chat-message-input');
    if (inp) setTimeout(() => inp.focus(), 250);
  }
  function closeChat() {
    chatWidget.style.display = 'none';
    chatFab.style.display    = 'flex';
  }
  document.getElementById('open-chat-btn').addEventListener('click', openChat);
  document.getElementById('chat-fab').addEventListener('click', openChat);
  document.getElementById('chat-close-btn').addEventListener('click', closeChat);

  // Send chat message
  const chatForm         = document.getElementById('chat-form');
  const chatRateLimitMap = {};                       // rate-limit per email
  chatForm.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot check
    const hp = document.getElementById('chat-hp');
    if (hp && hp.value.trim() !== '') return;        // bot detected — silently drop

    const nameEl  = document.getElementById('chat-user-name');
    const emailEl = document.getElementById('chat-user-email');
    const msgEl   = document.getElementById('chat-message-input');

    const rawName  = nameEl.value.trim();
    const rawEmail = emailEl.value.trim();
    const rawMsg   = msgEl.value.trim();

    if (!rawMsg) return;

    const userName  = sanitize(rawName)  || 'Visitor';
    const userEmail = sanitize(rawEmail) || '';
    const msgText   = sanitize(rawMsg);

    // Rate limit: max 5 chat messages per email per session
    chatRateLimitMap[userEmail] = (chatRateLimitMap[userEmail] || 0) + 1;
    if (chatRateLimitMap[userEmail] > 5) {
      appendChatMsg('You\'ve sent several messages. Our team will get back to you via email shortly.', 'agent');
      msgEl.value = '';
      return;
    }

    appendChatMsg(msgText, 'user');
    msgEl.value = '';

    if (!chatInfoCollected) {
      chatInfoCollected = true;
      const infoFields = document.getElementById('chat-info-fields');
      if (infoFields) infoFields.style.display = 'none';
    }

    // Send via EmailJS
    sendEmail({
      from_name : userName,
      from_email: userEmail,
      company   : 'N/A',
      interest  : 'Live Chat',
      message   : `[LIVE CHAT] ${msgText}`,
    });

    setTimeout(() => {
      appendChatMsg('Thanks for reaching out! 🎉 Our team has received your message and will reply to your email within a few hours.', 'agent');
    }, 1200);
  });

  function appendChatMsg(text, type) {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const div = document.createElement('div');
    div.className = `msg msg-${type}`;
    // Use textContent for bubble to prevent XSS
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = text;
    const time = document.createElement('div');
    time.className = 'msg-time';
    time.textContent = now;
    div.append(bubble, time);
    chatMsgsBox.appendChild(div);
    chatMsgsBox.scrollTop = chatMsgsBox.scrollHeight;
  }

  // ── Contact Form ──────────────────────────────────────────────────────────
  const contactForm    = document.getElementById('contact-form');
  const formError      = document.getElementById('form-error');
  let formLastSubmit   = 0;                          // rate-limit timestamp
  const FORM_COOLDOWN  = 30000;                      // 30 s between submissions

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot check
    const hp = document.getElementById('hp-field');
    if (hp && hp.value.trim() !== '') return;        // bot — silently drop

    // Rate limiting
    const now = Date.now();
    if (now - formLastSubmit < FORM_COOLDOWN) {
      showError(`Please wait ${Math.ceil((FORM_COOLDOWN - (now - formLastSubmit)) / 1000)}s before submitting again.`);
      return;
    }

    const name     = sanitize(document.getElementById('f-name').value.trim());
    const email    = sanitize(document.getElementById('f-email').value.trim());
    const company  = sanitize(document.getElementById('f-company').value.trim()) || 'N/A';
    const interest = sanitize(document.getElementById('f-interest').value.trim()) || 'N/A';
    const message  = sanitize(document.getElementById('f-message').value.trim());

    // Validation
    if (!name)    return showError('Please enter your full name.');
    if (!isValidEmail(email)) return showError('Please enter a valid email address.');
    if (!message) return showError('Please enter your message.');
    if (message.length < 10) return showError('Message is too short. Please provide more detail.');

    formError.style.display = 'none';
    setBtnLoading(true);
    formLastSubmit = Date.now();

    sendEmail({ from_name: name, from_email: email, company, interest, message })
      .then(() => showSuccess())
      .catch(err => {
        console.error('Send error:', err);
        // Fallback: open mailto
        const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInterest: ${interest}\n\nMessage:\n${message}`;
        window.location.href = `mailto:arpitrautela01@indorsetech.com?subject=Website Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
        setTimeout(showSuccess, 800);
      });
  });

  // Reset form button
  const resetBtn = document.getElementById('reset-form-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      contactForm.reset();
      contactForm.style.display = 'block';
      document.getElementById('form-success').style.display = 'none';
      setBtnLoading(false);
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  // Sanitize: strip HTML tags and trim
  function sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .trim()
      .slice(0, 2000);                               // hard cap
  }

  function isValidEmail(email) {
    // RFC-5322 simplified regex
    return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  function sendEmail(params) {
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        ...params,
        to_email: 'arpitrautela01@indorsetech.com',
      });
    }
    return Promise.reject(new Error('EmailJS not configured'));
  }

  function showSuccess() {
    contactForm.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
    setBtnLoading(false);
  }

  function showError(msg) {
    formError.textContent = msg;
    formError.style.display = 'block';
    setBtnLoading(false);
  }

  function setBtnLoading(loading) {
    const btn     = document.getElementById('form-submit-btn');
    const text    = document.getElementById('btn-text');
    const arrow   = document.getElementById('btn-arrow');
    const spinner = document.getElementById('btn-spinner');
    btn.disabled         = loading;
    text.textContent     = loading ? 'Sending…' : 'Send Message';
    arrow.style.display  = loading ? 'none' : 'inline';
    spinner.style.display = loading ? 'inline' : 'none';
  }

}

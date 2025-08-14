/* Mobile nav */
(function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();

/* Footer year */
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
})();

/* Contact form basic validation */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const setError = (name, message) => {
    const el = form.querySelector(`.error[data-for="${name}"]`);
    if (el) el.textContent = message || '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    if (!name.value.trim()) { setError('name', 'Please enter your name.'); hasError = true; } else setError('name');
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setError('email', 'Enter a valid email.'); hasError = true; } else setError('email');
    if (message.value.trim().length < 10) { setError('message', 'Write at least 10 characters.'); hasError = true; } else setError('message');

    const status = document.getElementById('form-status');
    if (hasError) {
      status.textContent = 'Please fix the errors above.';
      return;
    }

    status.textContent = 'Sending...';
    // Simulate request
    setTimeout(() => {
      status.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    }, 800);
  });
})();



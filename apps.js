// Basic interactions: year, mobile menu, contact form fake submit
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle (simple behaviour)
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const expanded = nav.style.display === 'block';
      nav.style.display = expanded ? '' : 'block';
      toggle.textContent = expanded ? '☰' : '✕';
    });
  }


  // contact form: fake submit (you can wire this to Netlify Forms / Formspree / server)
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.textContent = 'Sending…';
      // simulate a network request
      setTimeout(() => {
        feedback.textContent = 'Thanks — message received. We will reply within 2 business days.';
        form.reset();
      }, 750);
    });
  }
});

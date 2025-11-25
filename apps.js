// === Basic Interactions: Year, Mobile Menu, Contact Form ===
document.addEventListener('DOMContentLoaded', () => {

  // --- Footer Year ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Mobile Navigation Toggle ---
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = nav.style.display === 'block';
      nav.style.display = expanded ? 'none' : 'block';
      toggle.textContent = expanded ? '☰' : '✕';
    });
  }

  // --- Gallery Images (if dynamic) ---
  const galleryContainer = document.getElementById('gallery-grid');
  if (galleryContainer) {
    const baseURL = "images/gallery/";
    const imageList = [
      "campsite.jpeg","campsite3.jpeg","campsite4.jpeg","campsiteUSA.jpeg","cydtractor.jpeg",
      "equipment.jpeg","fencesunset.jpeg","fencetractor.jpeg","mulch.jpeg","nursery.jpeg",
      "orchard.jpeg","solar.jpeg","snow.png","tractor2.jpeg","treedamage.jpeg",
      "treeplanting.jpeg","treerow.jpeg","treerow2.jpeg","treetransplant.jpeg",
      "treetransplant1.jpeg","treetransplant2.jpeg","vermeer.jpeg"
    ];

    imageList.forEach(filename => {
      const img = document.createElement("img");
      img.src = baseURL + filename;
      img.alt = filename.replace(/\.[^/.]+$/, ""); // clean alt text
      img.classList.add("gallery-item"); // optional: for CSS styling
      galleryContainer.appendChild(img);
    });
  }

  // --- Contact Form Submission via Formspree ---
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.textContent = 'Sending…';
      feedback.style.color = 'green';

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          feedback.textContent = 'Thanks! Message sent successfully.';
          form.reset();
        } else {
          feedback.textContent = 'Oops! Something went wrong. Please try again.';
          feedback.style.color = 'red';
        }
      }).catch(() => {
        feedback.textContent = 'Oops! Something went wrong. Please try again.';
        feedback.style.color = 'red';
      });
    });
  }

});

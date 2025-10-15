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

  <script>
const galleryContainer = document.getElementById('gallery');

// replace this with your GitHub Pages base URL:
const baseURL = "https://<cydneyskeens>.github.io/<custom-landscape-services>/images/gallery/";

// list your images here — everything you upload to images/gallery/
  const imageList = [
  "campsite.jpeg",
  "campsite2.jpeg",
  "campsite3.jpeg",
  "campsite4.jpeg",
  "campsiteUSA.jpeg",
  "cydtractor.jpeg",
  "equipment.jpeg",
  "fencesunset.jpeg",
  "fencetractor.jpeg",
  "mulch.jpeg",
  "nursery.jpeg",
  "orchard.jpeg",
  "solar.jpeg",
  "tinyhousesnow.jpeg",
  "tractor2.jpeg",
  "treedamage.jpeg",
  "treeplanting.jpeg",
  "treerow.jpeg",
  "treerow2.jpeg",
  "treetransplant.jpeg",
  "treetransplant1.jpeg",
  "treetransplant2.jpeg",
  "vermeer.jpeg"
  // add more filenames here
];

imageList.forEach(filename => {
  const img = document.createElement("img");
  img.src = baseURL + filename;
  img.alt = filename;
  galleryContainer.appendChild(img);
});
</script>

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

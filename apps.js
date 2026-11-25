// === Basic Interactions: Year, Mobile Menu, Gallery, Shop, Contact Form ===
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
        const closeMenu = () => {
            nav.classList.remove('is-open');
            toggle.textContent = '☰';
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            toggle.textContent = isOpen ? '✕' : '☰';
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when a link is tapped (mobile)
        nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

        // Close menu with Escape, or if the window grows back to desktop width
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
        window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
    }

    // --- Gallery Images (dynamic) ---
    const galleryContainer = document.getElementById('gallery-grid');
    if (galleryContainer) {
        const baseURL = "images/gallery/";

        // filename -> descriptive alt text (better for accessibility and SEO)
        const gallery = [
            ["campsite.jpeg", "Riverside campsite on the Spring River"],
            ["campsite3.jpeg", "Group campsite along the Spring River"],
            ["campsite4.jpeg", "Riverfront camping spot with Ozarks backdrop"],
            ["campsiteUSA.jpeg", "Campsite with American flag by the river"],
            ["cydtractor.jpeg", "Tractor at work on a landscaping project"],
            ["equipment.jpeg", "Landscaping equipment hauled on a trailer"],
            ["fencesunset.jpeg", "Fence line at sunset"],
            ["fencetractor.jpeg", "Tractor working along a fence line"],
            ["mulch.jpeg", "Fresh mulch landscaping"],
            ["nursery.jpeg", "Native tree nursery"],
            ["orchard.jpeg", "Small fruit orchard"],
            ["solar.jpeg", "Solar panel arrays on the property"],
            ["snow.png", "Tiny home in the snow"],
            ["tractor2.jpeg", "Tractor and implements"],
            ["treedamage.jpeg", "Tree trunk with storm damage"],
            ["treeplanting.jpeg", "Auger digging a hole for tree planting"],
            ["treerow.jpeg", "Native seedlings planted in rows"],
            ["treerow2.jpeg", "Young pine seedling in native grassland"],
            ["treetransplant.jpeg", "Tree transplanting with a tree spade"],
            ["treetransplant1.jpeg", "Tree transplant in progress"],
            ["treetransplant2.jpeg", "Transplanted tree with tractor in the field"],
            ["vermeer.jpeg", "Vermeer compact tree spade"]
        ];

        gallery.forEach(([filename, alt]) => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("gallery-item-wrap");

            const img = document.createElement("img");
            img.src = baseURL + filename;
            img.alt = alt;
            img.loading = "lazy"; // defer offscreen images for faster load
            img.decoding = "async";
            img.classList.add("gallery-item");

            wrapper.appendChild(img);
            galleryContainer.appendChild(wrapper);
        });
    }

    // --- Shop: Steel Storm Shelter photo gallery ---
    // (optional second item = alt text). Until photos are added, a
    // "photos coming soon" tile is shown instead of broken images.
    const shelterGrid = document.getElementById('shelter-grid');
    if (shelterGrid) {
        const shelterBase = "images/gallery/";
        const shelterPhotos = [
            ["bathroom.jpg", "Steel storm shelter exterior"],
        ];

        if (shelterPhotos.length === 0) {
            const tile = document.createElement("div");
            tile.className = "shelter-placeholder";
            tile.textContent = "Photos coming soon";
            shelterGrid.appendChild(tile);
        } else {
            shelterPhotos.forEach(([filename, alt]) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("gallery-item-wrap");
                const img = document.createElement("img");
                img.src = shelterBase + filename;
                img.alt = alt || "Steel storm shelter";
                img.loading = "lazy";
                img.decoding = "async";
                img.classList.add("gallery-item");
                wrapper.appendChild(img);
                shelterGrid.appendChild(wrapper);
            });
        }
    }

    // --- Shop: safety net for the Stripe "Buy Now" link ---
    // If the real Stripe link has not been pasted into shop.html yet, don't
    // send customers to a dead URL — send them to the contact form instead.
    const buyBtn = document.getElementById('buy-now-btn');
    if (buyBtn) {
        const href = buyBtn.getAttribute('href') || '';
        if (!href.startsWith('https://buy.stripe.com/')) {
            buyBtn.setAttribute('href', 'index.html#contact');
            buyBtn.textContent = 'Contact Us to Purchase';
        } else {
            buyBtn.setAttribute('target', '_blank');
            buyBtn.setAttribute('rel', 'noopener noreferrer');
        }
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
                    feedback.style.color = 'green';
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
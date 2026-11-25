# Custom Landscape Services (cls23.com)

Static site (HTML/CSS/JS, no build step). Hosted on GitHub Pages (`CNAME` = www.cls23.com).

Pages: `index.html`, `campsites.html`, `shop.html`

## To finish the Shop page
1. **Stripe link:** open `shop.html`, find `id="buy-now-btn"`, and replace
   `REPLACE_WITH_STRIPE_BUY_NOW_LINK` with the real link (starts with `https://buy.stripe.com/`).
   Until then the button safely shows "Contact Us to Purchase".
2. **Shelter photos:** put them in `images/shelter/`, then list them in `apps.js`
   inside `shelterPhotos` (examples are commented out). Use ~1400px wide JPGs.

## Images
Keep photos at about 1400px wide, JPEG quality ~80, and correctly rotated before uploading.

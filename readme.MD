# Grape Harp — Static Website

This is a minimal static site modeled after a Squarespace-style homepage. It includes a hero, gallery, services/pricing, and a contact form.

## How to use

1. Create a new GitHub repository (public or private).
2. Add the files from this repo: `index.html`, `styles.css`, `app.js`, `README.md`.
3. Commit & push.
4. (Optional) Publish via GitHub Pages:
   - In the GitHub repo, go to Settings → Pages → Source: `main` branch, `/ (root)` and Save.
   - After a minute, your site will be available at `https://<username>.github.io/<repo>`.

## Customization

- Replace the placeholder hero photo (`.photo-placeholder`) with your own image by replacing the element, or update hero CSS to use a background-image.
- Replace gallery images (the current code uses `picsum.photos` placeholders) with your own images in the `<figure>` blocks.
- To receive real contact form submissions, wire the form to a service like Netlify Forms, Formspree, or your own server.

## Notes

- This is intentionally simple and dependency-free (no build system). If you want a React or Tailwind version, tell me and I’ll produce one.

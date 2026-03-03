# Synapse (سنابس) Website

Static website for Synapse KSA.

## Project structure

- `index.html` – Homepage
- `CSS/` – Stylesheets
- `js/` – JavaScript
- `Assets/` – Images and media
- Additional pages: `KidsAIBootcamp.html`, `Organizational_structure.html`, `Previous_meetings.html`, etc.

## Pushing to GitHub

Your repo is already connected to **https://github.com/SynapseKSA/Website-.git**.

1. **Stage and commit changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. **Push to GitHub**
   ```bash
   git push -u origin main
   ```

If the remote isn’t set yet:
```bash
git remote add origin https://github.com/SynapseKSA/Website-.git
git branch -M main
git push -u origin main
```

## GitHub Pages (optional)

To publish this site on GitHub Pages:

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The included workflow will build and deploy on every push to `main`.

Your site will be available at:  
`https://synapseksa.github.io/Website-/`

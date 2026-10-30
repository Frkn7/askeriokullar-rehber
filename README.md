# Askeri Okullar — static site

This folder is a complete static website. It has no build step, analytics, advertising scripts, third-party fonts, or runtime service dependencies.

## Run locally

Open `index.html` in a browser or serve this folder with a local static HTTP server. The article library, search, category filters, favorites, checklist, net calculator, personal calendar, study plan, interview practice, print/PDF views, and JSON backup/restore run entirely in the browser. Personal data is stored in that browser's local storage; interview answers are not saved.

## Publish

### GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes this folder when changes are pushed to `main` or `master`, and can also be started manually. Put this folder's contents at the root of a GitHub repository, push to either branch, then in the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source. Check the workflow run for the published URL.

To use a custom domain, configure it in the repository's Pages settings and add the DNS records required by GitHub at your domain provider. Account access and DNS changes must be completed by the site owner. GitHub Pages provides HTTPS after the domain is configured and verified.

### Other static hosts

Upload the contents of this folder, including `images/`, to any static web host and set `index.html` as the default document. No server-side code, build step, or environment variables are required.

## Content and accuracy

The article guides are original general information, not copied article text or official announcements. They include links to relevant institutions' home pages; find and verify the current official guide there for eligibility, dates, scores, health criteria, and application steps. The personal calendar accepts dates entered by the visitor; it does not fetch or certify official deadlines. The study plan is a general template, the interview practice is self-guided, and the net calculator is not an official score calculator.

## Privacy and ads

The site contains no ad code, tracking pixels, analytics, third-party fonts, or external article embeds. Official reference links open the relevant institution's website in a new tab. Favorites, checklist progress, personal dates, and the study plan are saved only in the current browser's local storage. Use **Yedekleme ve ayarlar** to download or restore a JSON backup, or clear this browser's saved site data. Interview answer drafts are not persisted.

## Files

- `index.html` — static document shell
- `app.js` — article library, local article pages, search, filters, candidate tools, and local data backup/restore
- `styles.css` — responsive layout and accessibility states
- `images/` — locally stored article cover images
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow

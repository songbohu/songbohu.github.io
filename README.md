# Songbo Hu — personal homepage

A responsive academic homepage built with React. Live site: https://songbohu.github.io.

## Development

Install dependencies with `npm ci`, then run `npm start`.
For the current local preview, use `BROWSER=none PORT=3011 npm start`.

## Editing

- `src/Homepage.js`: biography, profile links, publications layout and education.
- `src/publications.json`: publication records, ordered from newest to oldest.
- `src/Portrait.js`: desk/cycling photo interaction and caption.
- `src/index.css`: shared desktop and mobile styles.
- `src/media/working-framed.png` and `src/media/cycling-bend.jpg`: the two displayed photos.
- `public/index.html` and `public/manifest.json`: page metadata.

The portrait responds to mouse hover, touch, Enter and Space. The cycling crop is defined in CSS to retain the bend without stretching the image. Reduced-motion preferences disable the crossfade.

`src/index.js` mounts `App`, which exports the responsive homepage. The older Card components and Desktop/Mobile exports are retained for reference and compatibility; the live homepage does not depend on them.

## Validation

```sh
CI=true npm test -- --watchAll=false
npm run build
```

## GitHub Pages deployment

```sh
npm run-script deploy
```

The existing `predeploy` script creates a production build, then `gh-pages` publishes `build/` to the `gh-pages` branch of `origin` (`songbohu/songbohu.github.io`). This requires GitHub push access. GitHub Pages can take a few minutes to update.

Deployment publishes the generated site; it does not commit or push source changes to `main`. Keep source changes separately in version control. Dependencies, generated builds and local editor settings are excluded by `.gitignore`.

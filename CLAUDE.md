# What I carry of you

Clàudia's letters project. A static site (no build step) published from this repo.

## Files
- `index.html` — the whole site: home page and letter view, routed by the URL hash (`#letter-01`, or a travelling copy `#c…`).
- `letters.js` — `window.LETTERS`, one object per letter: `id`, `title`, `to`, `date`, `en` (paragraphs), `ca` (same paragraphs in Catalan, optional, same count), `forYou` (`lines`, `question`, `gesture`). The last letter in the array is the one on the home page.
- `config.js` — `window.SITE`: `url` (the public address, ending in `/`, used inside shared links), `email`, `formEndpoint` (optional Formspree URL).

## Adding a letter
Append a new object to `window.LETTERS` with the next `id` ("02", "03"…). Keep Clàudia's words exactly as she gives them. Never change the `id` of a published letter: travelling links encode it.

## Voice
All copy is in English, written with great care and tenderness: short sentences, gentle repetition, nothing technical ("person", "words", "give", never "copy", "link", "hand number"). Passing a letter is anonymous and words are optional. The signature is "Clàudia" with a star as the dot of the i.

## Publishing
Every push to `main` deploys automatically through Cloudflare (a few minutes). `_headers` tells browsers to revalidate files. When `config.js` or `letters.js` change, bump the `?v=` on their `<script>` tags in `index.html` so returning visitors get the new version.

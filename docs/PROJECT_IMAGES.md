# Project screenshots for the portfolio

Use this as a quick reference when adding images to projects in `src/data/site.ts`.

## What to capture

- **Best option:** Landing page **hero section** (first screen users see). Clear, recognizable, and usually brand-aligned.
- **Alternative:** Main app screen (e.g. dashboard, primary flow) if the product is behind login and you can share a sanitized screenshot.
- **Avoid:** Cluttered admin panels or empty states unless they’re the main focus of the project.

## Specs

- **Aspect ratio:** 16:9 or 4:3.
- **Width:** 800–1200px is enough for the cards; the layout scales.
- **Format:** PNG or WebP. Keep file size reasonable (e.g. &lt; 500KB) for fast loading.

## Where to host

- Put images in `/public/projects/` (e.g. `public/projects/vouch.png`) and set `image: "/projects/vouch.png"` in `site.ts`, or
- Use a CDN (Vercel Blob, Cloudinary, etc.) and set `image` to the full URL.

## Vouch (repo in someone else’s account)

You can still add the project:

- **Demo:** Set `link` to the live app URL when you have it.
- **GitHub:** Either leave `repo` empty, or set it to the collaborator’s repo URL and mention in the description that you led frontend (repo in collaborator’s account). Both are fine; recruiters care more about the demo and your role.

Once `link` and/or `repo` are set in `site.ts`, the **Demo** and **GitHub** buttons on the card will show and link correctly.

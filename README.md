# Rishabh Jain · portfolio

A single-page portfolio in plain HTML, CSS and JavaScript. No build step, no installs.

## Files

- `index.html`: all the text and sections
- `styles.css`: colors and layout (change the variables at the top to restyle)
- `globe-data.js`: map data for the globe
- `script.js`: the project pop-up content (edit the `projects` object) plus small animations
- `images/`: put your photos here (names below)

## Photos to add (all optional, placeholders show until you add them)

| File | Where it shows |
|---|---|
| `images/hero.jpg` | top of the page (portrait works best) |
| `images/story-1.jpg`, `images/story-2.jpg` | end of the growing-up section (childhood or travel photos) |
| `images/logos/ey.png`, `images/logos/indian-express.png` | company logos in the work section (already added; they show on a white tile) |
| `images/football.jpg`, `images/movies.jpg`, `images/writing.jpg`, `images/swimming.jpg` | off-hours |

Keep each file under about 500 KB so the site loads fast.

## Fill these in before publishing

1. Add your photos (see the table above).
2. Re-read every number on the site once and make sure you can explain it.

## Side decorations

On screens at least 1400px wide the page shows a football match tracker on the left (a ball that rolls as you scroll, with a match clock) and taped scrapbook notes on the right. They are hidden on smaller screens. Edit the notes in the `notes` list near the bottom of `script.js`.

## Interactive sections

- **Growing up:** an interactive dotted globe. Chapter buttons spin it to each place and show a country cut-out card. Edit the years and text in the `CH` list in `script.js`. `globe-data.js` holds the map data (don't edit it by hand).
- **Toolkit:** a laptop lid covered in draggable stickers (tabs filter by group, shuffle rearranges). Edit the skills as `<li class="s" data-g="pm|data|risk">` items in `index.html`.
- **Projects:** a five-a-side tactics board on screens 900px and wider (with a toggle back to cards). Player roles and hover stats are in the `.pl` buttons in `index.html`; project pop-up text stays in `script.js`.
- **Say hi:** a screenplay page. Edit the script lines in the `.script` block in `index.html`.

## Preview on your computer

Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish on Vercel (about 10 minutes)

1. Create a free account at github.com and make a new repository.
2. Upload everything in this folder to it (drag and drop works on the GitHub website).
3. Go to vercel.com, sign in with GitHub, click **Add New → Project**, pick your repo.
4. Leave all settings as they are and click **Deploy**.

You'll get a link like `yourname.vercel.app`. Every time you update a file on GitHub, Vercel republishes automatically.

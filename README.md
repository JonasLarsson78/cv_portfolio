
# CV Portfolio

En personlig portfolio byggd med React, TypeScript och Vite.

## Funktioner
- Visar projekt från `src/data/data.json`.
- SCSS för styling.
- Bilder, demo-länkar och GitHub-länkar för varje projekt.
- Kodexempel och HTML i projektbeskrivning.
- Grid-layout med tre projekt per rad.
- Visa/dölj projekt med `show`-flagga i JSON.

## Lägg till projekt
Lägg till ett objekt i `src/data/data.json` under `projects`:

```json
{
  "show": true,
  "title": "Projektets namn",
  "description": "Beskrivning <b>med HTML</b> och <pre><code>kod</code></pre>.",
  "link": "https://demo-url",
  "github": "https://github.com/username/repo",
  "img": "/proj/bild.png"
}
```

Sätt `show` till `false` för att dölja projektet.

## Starta projektet

```bash
npm install
npm run dev
```

## Tech Stack
- React
- TypeScript
- Vite
- SCSS

## Struktur
- `src/components/ProjectList.tsx` – visar projekt
- `src/data/data.json` – projektdata
- `src/portfolio.scss` – styling

## Demo
Se live: [mincv.nu](https://www.mincv.nu/)

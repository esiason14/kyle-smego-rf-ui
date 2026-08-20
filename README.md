# RainFocus Summit — Event Setup Guide

A React + SCSS implementation of the RainFocus Summit event admin UI: sidebar navigation, event header, and the attendee module setup guide.

## Requirements

- Node.js 20+
- npm

## Running the app

Install dependencies, then start the dev server:

```bash
npm install
npm run dev
```

Open the URL Vite prints (default [http://localhost:5173](http://localhost:5173)).

## Other commands

```bash
npm run build    # production build, output in build/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

`npm run build` outputs a single self-contained `build/index.html` (JS/CSS/images inlined) plus `build/favicon.svg` — open `index.html` directly in a browser (double-click, no server needed) and it works as-is.

## Project structure

```
src/
  components/
    Sidebar/        # rail + collapsible nav panel, mobile topbar
    EventHeader/     # event logo, name, date/location, edit button
    SetupGuide/       # attendee module step-by-step guide
    icons/            # shared icon components
  styles/            # design tokens (_variables.scss), reset, global styles
```

Design tokens (colors, spacing, type scale, breakpoints) live in `src/styles/_variables.scss` and are shared across all components via `@use`.

## Known limitation: hardcoded text

Event/user data (name, date, location, avatar initials) is centralized as constants in `App.jsx` and passed down as props...that part isn't hardcoded per-component.

Everything else: nav labels, step labels, card titles/descriptions in `SetupGuide.jsx`, button/placeholder text is inline JSX, not pulled from a config or content file. That's fine for a single-language, single-instance app like this one, but if this ever needs i18n or non-developer content edits, that copy will need to be extracted into a strings/content layer first.

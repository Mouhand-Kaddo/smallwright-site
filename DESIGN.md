---
name: Smallwright
description: A pocket calculator for a phone that builds its own apps.
colors:
  body: "#1a1b26"
  bezel: "#24283b"
  well: "#0f1017"
  key: "#2c3048"
  key-lit: "#383d54"
  print: "#c0c6dd"
  print-dim: "#8f97b5"
  lcd: "#b9c4a7"
  lcd-ink: "#1c2418"
  lcd-ghost: "#5e6952"
  signal: "#7aa2f7"
  signal-lit: "#89aef9"
  signal-ink: "#0d1530"
  label: "#d9dce3"
  label-ink: "#16171d"
typography:
  display:
    fontFamily: "Doto, monospace"
    fontSize: "clamp(1.75rem, 10.5vw, 5.25rem)"
    fontWeight: 900
    lineHeight: 0.95
  readout:
    fontFamily: "Doto, monospace"
    fontSize: "1rem"
    fontWeight: 900
    lineHeight: 1.25
  readout-large:
    fontFamily: "Doto, monospace"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1.33
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.02
  lead:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  key:
    fontFamily: "Archivo Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  wordmark:
    fontFamily: "Archivo Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    letterSpacing: "0.22em"
  label:
    fontFamily: "Archivo Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  label-small:
    fontFamily: "Archivo Narrow, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  caption:
    fontFamily: "Archivo Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  focus: "6px"
  icon-sm: "10px"
  key: "12px"
  well: "16px"
  screen: "20px"
  icon-lg: "22px"
  lcd: "28px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  key-gap: "12px"
  key-gap-wide: "16px"
  well-pad: "24px"
  well-pad-wide: "32px"
  heading-to-content: "40px"
  section: "112px"
  section-wide: "144px"
components:
  key:
    backgroundColor: "{colors.key}"
    textColor: "{colors.print}"
    typography: "{typography.key}"
    rounded: "{rounded.key}"
    padding: "0 16px"
    height: "56px"
  key-hover:
    backgroundColor: "{colors.key-lit}"
  key-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.key}"
    rounded: "{rounded.key}"
    padding: "0 16px"
    height: "64px"
  key-signal-hover:
    backgroundColor: "{colors.signal-lit}"
  lcd-panel:
    backgroundColor: "{colors.lcd}"
    textColor: "{colors.lcd-ink}"
    rounded: "{rounded.lcd}"
    padding: "24px 20px 20px"
  well:
    backgroundColor: "{colors.well}"
    textColor: "{colors.print}"
    rounded: "{rounded.well}"
    padding: "{spacing.well-pad}"
  back-label:
    backgroundColor: "{colors.label}"
    textColor: "{colors.label-ink}"
    rounded: "{rounded.well}"
    padding: "20px"
  app-icon:
    backgroundColor: "{colors.body}"
    textColor: "{colors.signal}"
    rounded: "{rounded.icon-lg}"
    size: "80px"
---

# Design System: Smallwright

## Overview

**Creative North Star: "The Pocket Calculator"**

The page is the face of a pocket calculator: the first computer that worked entirely in your palm, with no network. The whole ground is matte navy-black plastic. A large grey-green LCD, sunk behind a slate bezel, carries the headline and a stepped readout in dot-matrix ink. Below it sits a bank of raised slate keys with printed legends, and one blue key that takes you to the release. Further down, the page turns the calculator over: recessed wells hold lists, and a silver sticker on the back carries the specifications.

Density is low and the scale contrast is deliberate. The LCD headline runs up to 5.25rem while the printed legends sit at 0.7rem, and almost nothing falls between them except the Archivo section headlines and body copy. Depth is physical, made by molding (raised keys, sunken wells, a recessed screen) and never by floating cards. Each colour stands for one material, and the blue stands for one action.

The build rejects the dark hero with a floating phone mockup and a row of feature cards. Real phone screenshots are the only pictures.

**Key Characteristics:**
- One plastic ground (#1a1b26) under the whole page; no section backgrounds.
- An LCD panel with a 5px dot-matrix texture, inset shadow and a thick bezel border.
- Raised keycaps with a dark bottom lip that compress 3px when pressed.
- A single blue (#7aa2f7) reserved for the release key and the launcher-icon glyph.
- Doto dot-matrix type only for readouts; Archivo Narrow uppercase for every printed legend.

## Colors

Low-chroma navy plastics, one grey-green display, one silver sticker and one saturated blue. Each colour names a material.

### Primary
- **Release Blue** (signal): the colour of the launcher icon. Used only for the Download keys (fill) and the glyph in the Builder and Worker app icons. Its hover is Release Blue mixed 12% toward white in OKLab (signal-lit).
- **Blue Key Ink** (signal-ink): the legend and arrow printed on a blue key (7.15:1 on Release Blue).

### Secondary
- **LCD Grey-Green** (lcd): the hero display panel's ground, and dot-matrix text on dark plastic for things that live on the phone (the "Lives on your phone" list, the install step numerals). Also the focus ring and the page's text selection.
- **LCD Ink** (lcd-ink): dot-matrix ink on the LCD (8.76:1).
- **Unlit Segment** (lcd-ghost): the colour a readout line starts from when it switches on. It is only ever an animation start state, never resting text.

### Tertiary
- **Back-Label Silver** (label): the specification sticker's ground, and the ink for section headlines and the "Sent to the model" list on dark plastic (12.45:1 on the body).
- **Sticker Ink** (label-ink): text and table rules on the back label.

### Neutral
- **Matte Body** (body): the ground for the whole page, the browser theme colour, and the Builder icon's tile.
- **Bezel Slate** (bezel): the thick border around the LCD and the Worker icon's tile.
- **Recess** (well): sunken panels cut into the body.
- **Key Slate** (key): the keycap plastic. Its hover is Key Slate mixed 7% toward white in OKLab (key-lit).
- **Printed Grey** (print): default text, key legends and body copy (10.06:1 on the body, 7.62:1 on a key).
- **Faded Print** (print-dim): secondary printed legends such as group headings, well headings, the footer and the legend above the Download key (5.91:1 on the body).

### Named Rules
**The One Blue Key Rule.** Outside the launcher-icon artwork, Release Blue only ever means "get the release". No links, headings, highlights or focus states are blue.

**The Material Rule.** A colour is a material, not a decoration. Each surface takes its material's colour and its paired ink: key with print, LCD with LCD ink, sticker with sticker ink, blue key with blue-key ink.

## Typography

**Display Font:** Doto (with monospace), weights 700 and 900, self-hosted
**Body Font:** Archivo (with sans-serif), weights 400, 600 and 800
**Label/Mono Font:** Archivo Narrow (with sans-serif), weights 600 and 700

**Character:** A dot-matrix display face reads as the LCD's own pixels, and a narrow grotesk reads as the legends printed on plastic. Archivo carries the human-readable sentences between them. The contract asked for a width-axis grotesk; the build uses two static families, Archivo and Archivo Narrow, instead of one variable width axis.

### Hierarchy
- **Display** (Doto 900, clamp(1.75rem, 10.5vw, 5.25rem), 0.95): the LCD headline only, balanced.
- **Readout** (Doto 900, 1rem rising to 1.125rem, 1.25): the example-run lines on the LCD, set as a two-column table (a 5.25rem or 6.5rem stage column, then the value), with stages in uppercase.
- **Readout Large** (Doto 900, 1.5rem rising to 1.875rem): list items inside wells, in LCD Grey-Green or Back-Label Silver. Install step numerals use Doto 900 at body size.
- **Headline** (Archivo 800, clamp(2rem, 5vw, 3.5rem), 1.02): section headings in Back-Label Silver, capped at 18 to 20ch, balanced. On the back label they are clamp(1.75rem, 5vw, 2.5rem).
- **Lead** (Archivo 400, 1.125rem to 1.25rem to 1.5rem, 1.375): the LCD paragraph, max 38ch.
- **Body** (Archivo 400, 1.125rem, 1.625): section prose, 44 to 60ch.
- **Key** (Archivo Narrow 700, 1rem, 0.06em, uppercase): keycap legends. The Download key's legend is 1.25rem, or 1.5rem on wide screens.
- **Wordmark** (Archivo Narrow 700, 1.125rem, 0.22em, or 0.14em on small screens, uppercase): the product name beside the header icon.
- **Label** (Archivo Narrow 700, 0.875rem, 0.1 to 0.18em, uppercase): group, well and table-row headings.
- **Label Small** (Archivo Narrow 700, 0.7rem, 0.14em, uppercase): the LCD's annunciators and figure caption.
- **Caption** (Archivo Narrow 600, 0.875rem, 0.08em, uppercase): screenshot captions and the Builder's capability list (at 1rem).

### Named Rules
**The Readout Rule.** Doto is for things a display would show: the LCD, the run, readout lists and step numerals. It never sets a section headline or a paragraph.

**The Printed Legend Rule.** Every small label is Archivo Narrow, uppercase and tracked between 0.06em (keys) and 0.22em (wordmark). Archivo never appears in uppercase.

## Layout

There is a single centred column with a 72rem maximum width and a 16px gutter, widening to 32px from 640px. The header fills the first viewport (min-height 100svh) as the calculator face: wordmark strip, then the LCD, then the key bank.

The LCD is one column on small screens. From 1024px it becomes a 1.2fr / 1fr grid, with the headline spanning both columns and the annunciators right-aligned on its foot. The key bank is a two-column grid with the Download key first and full width. At 640px it becomes four columns. At 1024px it becomes four equal columns plus a 1.6fr column, where the Download key spans two rows in the "=" position and Source spans the four columns beside it. Section keys are 56px tall and the Download key is 64px.

Sections are separated only by space: 112px, or 144px from 640px. Each headline sits 40px above its content. Screenshots scroll horizontally with snap points below 1024px, bleeding to the screen edge. From 1024px they become a static 2fr / 3fr grid. Two-panel layouts (wells, Builder and Worker, Install) stack on small screens and split from 768px or 1024px.

## Elevation & Depth

Depth is molded, not floated. Every shadow describes a physical relationship: a key stands up from the body, a well is cut into it, the LCD sits sunk under its bezel, and the sticker lies on top of the plastic. Nothing hovers in ambient space, and there are no blur or glass effects.

### Shadow Vocabulary
- **Raised key** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.1), inset 0 -5px 0 rgb(0 0 0 / 0.35), 0 8px 16px -6px rgb(0 0 0 / 0.7)`): keycaps at rest. The 5px inner bottom lip makes the key's side wall.
- **Pressed key** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.08), inset 0 -2px 0 rgb(0 0 0 / 0.35), 0 3px 6px -3px rgb(0 0 0 / 0.7)` with `translateY(3px)`): the active state.
- **Sunken LCD** (`box-shadow: inset 0 6px 14px -6px rgb(0 0 0 / 0.55), inset 0 -1px 0 rgb(255 255 255 / 0.25), 0 18px 40px -20px rgb(0 0 0 / 0.9)`): the display behind its bezel.
- **Recess** (`box-shadow: inset 0 2px 6px rgb(0 0 0 / 0.6), 0 1px 0 rgb(255 255 255 / 0.05)`): wells.
- **Sticker** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.4) inset, 0 10px 24px -10px rgb(0 0 0 / 0.8)`): the back label.
- **Laid photo** (`box-shadow: 0 18px 36px -18px rgb(0 0 0 / 0.9)`, plus a 1px white/10 ring): phone screenshots resting on the body.

### Named Rules
**The Molded Plastic Rule.** A shadow has to say whether a surface is raised, pressed, sunken or laid on top. Only keys respond to interaction, by sinking 3px.

## Shapes

Corners are soft and graded by object size: the focus ring 6px, small icon 10px, keys 12px, wells and sticker 16px, screenshots 20px, large icons 22px and the LCD 28px. The LCD's bezel is a solid Bezel Slate border, 10px wide (16px from 640px), with no separate frame element. App icons are a 108-unit square with a 26-unit corner, holding a rounded phone slab in Release Blue cut with a chevron (Builder) or a square cursor (Worker). The LCD's texture is a 5px dot grid made with a radial gradient of LCD Ink at 7% opacity. Rules appear only between table rows on the back label (1px, Sticker Ink at 25%).

## Components

### Buttons (Keycaps)
Tactile and heavy. Every link in the key bank is a keycap.
- **Shape:** gently rounded (12px). A flex row, centred, with an 8px gap, and the text balanced.
- **Default:** Key Slate with a Printed Grey legend, Key typography, 16px side padding, at least 56px tall, Raised key shadow.
- **Hover / Active:** hover lightens toward white in 160ms ease-out. Active sinks 3px and shrinks the lip, in 120ms with cubic-bezier(0.16, 1, 0.3, 1). Focus shows the global 3px LCD Grey-Green outline with a 3px offset.
- **Signal (Download):** Release Blue with a Blue Key Ink legend and a stroked download-arrow icon at 1.1em. It is the largest key: 64px tall in the bank and 96px in the Install section. In the bank, a Label Small legend in Faded Print ("Builder and Worker APKs") is printed above it, like a calculator's shift legend.

### LCD Panel
- **Corner Style:** 28px, inside a 10 to 16px Bezel Slate border.
- **Background:** LCD Grey-Green with the dot grid and the Sunken LCD shadow. Selected text inverts to LCD Ink on LCD Grey-Green.
- **Content:** the Display headline, a Lead paragraph, a captioned example run, and annunciators (Label Small, uppercase) at its foot.
- **Motion:** when motion is allowed, each run line switches from Unlit Segment to LCD Ink over 420ms with cubic-bezier(0.16, 1, 0.3, 1), staggered by 160ms per line after a 150ms delay.

### Cards / Containers (Wells)
- **Corner Style:** 16px.
- **Background:** Recess with the Recess shadow; there is no border.
- **Internal Padding:** 24px, or 32px from 640px.
- **Content:** a Label heading in Faded Print, then a Readout Large list 20px below it.

### Back Label
- **Style:** Back-Label Silver with the Sticker shadow, a 16px radius and 20px padding (40px from 640px), at most 48rem wide.
- **Content:** a headline row with a right-aligned Label reading "Smallwright · Alpha", then a two-column specification table. Row headers are Label type at 38% width with rules between rows. Below 640px each row stacks.

### Navigation
The key bank in the first viewport is the page's navigation: section keys jump to their sections, which are offset 32px from the top when scrolled to. Its only other element is the top strip: a 36px app icon and the wordmark. The footer is one row of Faded Print legends with an underlined Printed Grey link.

### App Icon
The launcher icon drawn inline as SVG: a Release Blue glyph on a Matte Body (Builder) or Bezel Slate (Worker) tile with a 1px white/10 ring. It is 36px with a 10px radius in the header, and 80px with a 22px radius above the Builder and Worker headlines.

## Do's and Don'ts

### Do:
- **Do** give every surface its material's paired ink: print on key, LCD ink on the LCD, sticker ink on the back label, blue-key ink on Release Blue.
- **Do** keep Release Blue (#7aa2f7) for the release key and the launcher-icon glyph only.
- **Do** make depth from the six shadows in the Shadow Vocabulary, each one saying raised, pressed, sunken or laid on top.
- **Do** set readouts in Doto 900 and printed legends in uppercase Archivo Narrow 600 or 700, tracked 0.06 to 0.22em.
- **Do** keep the jump in scale: huge readouts and headlines against 0.7 to 0.875rem legends.
- **Do** wrap run-line motion in `prefers-reduced-motion: no-preference` and keep the global LCD Grey-Green focus ring (3px solid, 3px offset).

### Don't:
- **Don't** use blue for links, headings, focus or emphasis.
- **Don't** set section headlines or paragraphs in Doto, or set Archivo in uppercase.
- **Don't** use floating cards, glass, blur or ambient glow; a surface is either molded into the body or laid on top of it.
- **Don't** put a mockup, illustration or invented UI where a real phone screenshot belongs.
- **Don't** give sections their own background colours; the body plastic runs under the whole page.
- **Don't** add rules between sections or blocks; the only rules are the back label's table rows.

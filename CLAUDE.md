# Retroizer — Web App (retroizer.com)

## What this is
Retroizer is a browser-based audio aging engine. Drop in audio, pick a vintage preset, dial intensity, export a processed WAV. "Instagram filter for audio." Live at retroizer.com, deployed via Netlify.

## Owner / Style
**Ted Kocher** — KBD Trio, POUROVER, Back Pocket Music. Dry, specific, absurdist humor. Montgomery Ward 1951 catalog aesthetic. Phosphor amber on near-black. Everything has a catalog number.

## Stack
- React 19 + Vite 8 + Tone.js 15
- No backend. Pure Web Audio API in the browser.
- Netlify: site ID `20b1d1ec-5673-4b7c-a8f7-f179f3ff196b`
- GitHub: `github.com/pour-over/retroizer`

## Architecture (4 layers)
```
App.jsx          →  React UI + all state
player.js        →  RetroPlayer singleton (load, play, stop, export)
chain.js         →  RetroChain — 15 Tone.js DSP nodes in series
presets.js       →  12 plain config objects (values at 100% intensity)
```

## Audio Signal Path (chain.js)
```
Source → HiPass → LoPass → HiShelf → LoShelf → MidPeak
       → Saturator → Compressor → Chorus → Phaser
       → Tremolo → Vibrato → Reverb (2.8s) → Delay
       → AirCut (fixed 10kHz LP, always on)
       → MasterGain (+3dB)

Pink noise bus → NoiseFilter (LP) → NoiseGain → MasterGain
```
**Build once, reconfigure always.** Chain is built on first load; `applyPreset()` ramps all 15 node params with 100ms smoothing. No teardown/rebuild.

**Intensity scaling:** all preset values are defined at 100%. Sweet spot 20–40%, 100% is a warning label.

**Export:** `Tone.Offline()` renders full duration + 2s reverb tail into WAV. Everything in the chain (reverb, noise, delay) is baked into the export.

## 12 Presets (src/audio/presets.js)
Row 1: Broken Cassette · Vinyl Room · AM Radio · Reel to Reel
Row 2: 1988 Datsun · Drive-In Speaker · 90s Voicemail · VHS Camcorder
Row 3 (old-timey): Victrola · Wax Cylinder · Wartime Radio · Crystal Set

Each preset has: `id, name, emoji, description` + all DSP parameter values.
Descriptions are humorous and specific — never generic.

## Demo Tracks (all KBD Trio → kbdtrio.com)
Files live in `public/audio/` with clean kebab-case names.
URLs use root-relative paths: `/audio/crazy-good.mp3`
Crazy Good is always default (preloaded on mount).

11 tracks: Crazy Good · The One From That Night · Load-Bearing Groove ·
Version Four Is Actually Better · Confidence At 130% Capacity · Still Going ·
The Third Thing · Unsolicited Expert Opinion · They Sent Notes, We Sent This ·
Wrong Room, Right Energy · Different In All The Right Ways

## Key Files
| File | Role |
|------|------|
| `src/App.jsx` | All UI, state, handlers. DEMO_TRACKS, CAT_NOS maps here. |
| `src/App.css` | Montgomery Ward aesthetic + per-preset CSS themes via `[data-preset=]` |
| `src/audio/chain.js` | DSP graph. `build()` once, `applyPreset(preset, intensity)` always. |
| `src/audio/player.js` | `load(file)`, `loadUrl(url)`, `play()`, `stop()`, `export()`, `setVolume()` |
| `src/audio/presets.js` | 12 preset configs + `getPreset(id)` helper |
| `public/audio/` | 11 demo MP3s |

## Deploy Workflow
```bash
npm run build                          # Vite → dist/
git add -A && git commit -m "..."
git push origin main
netlify deploy --dir=dist --site=20b1d1ec-5673-4b7c-a8f7-f179f3ff196b --prod
```

## Per-Preset CSS Themes
Each preset has its own color theme applied via `data-preset` attribute on `.app`.
Variables: `--amber`, `--amber-bright`, `--amber-dim`, `--amber-glow`, `--phosphor`, `--bg`, `--bg2`.
Old-timey presets: sepia (victrola), parchment (wax-cylinder), olive (wartime), electric-blue (crystal-set).

## Humor / Naming Rules
- Preset descriptions: dry, specific, scenario-based. Reference real objects, real years, real situations.
- Track names: absurdist but plausible as band names. Avoid filename hints.
- Copy: catalog numbers, "Satisfaction Guaranteed · Since 1872", Montgomery Ward language throughout.
- At 100% intensity: things should be "almost funny." Users dial in at 20–40%.

## Companion App
Mobile version lives at: `/Users/tedkocher/Desktop/ClaudeCode/RetroizerMobile`
Repo: `github.com/pour-over/retroizer-mobile`

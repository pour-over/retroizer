/**
 * Retroizer — Preset Definitions
 *
 * Values represent 100% intensity. The chain lerps everything toward
 * neutral at lower intensities, so 20–40% sounds realistic, 100% sounds
 * like the equipment was stored in a flood.
 *
 * Rule: the name IS the vibe. Keep copy sharp, specific, not trying too hard.
 */

export const presets = [

  // ── ROW 1 ────────────────────────────────────────────────────────────────

  {
    id: 'broken-cassette',
    name: 'Broken Cassette',
    emoji: '📼',
    description: 'Warped tape, eaten highs, hiss you can feel. Like a mix left in a hot car all August. At 100%: the car was on fire.',

    hiPass: 110,
    loPass: 5500,
    hiShelfGain: -22,
    loShelfGain: 4,
    midFreq: 900,
    midGain: -3,

    // Crunchy warmth — more harmonic grit, warmer saturation order
    satWet: 0.94,
    satOrder: 10,

    compThreshold: -16,
    compRatio: 8,

    // More wow/flutter — that seasick warble when the capstan slips
    chorusWet: 0.70,
    chorusFreq: 0.7,

    vibratoDepth: 0.48,   // up from 0.28 — you feel it now
    vibratoFreq: 0.55,    // slow, lurching

    noiseLevel: 0.15,
    noiseFilterFreq: 3500,

    reverbWet: 0.55,
    delayWet: 0,
  },

  {
    id: 'vinyl-room',
    name: 'Vinyl Room',
    emoji: '🎵',
    description: 'Warm pressing, surface crackle, the smell of a record store at 2pm on a Tuesday. At 100%: you found this at an estate sale. It was under a radiator.',

    hiPass: 35,
    loPass: 12000,
    hiShelfGain: -16,
    loShelfGain: 5,
    midFreq: 3000,
    midGain: -2,

    satWet: 0.55,
    satOrder: 3,

    compThreshold: -20,
    compRatio: 4,

    phaserWet: 0.45,

    // Cracks & skips — low noiseFilterFreq gives crackle texture (not smooth hiss),
    // high noiseLevel makes it pop, delay adds subtle skip artifact
    noiseLevel: 0.26,
    noiseFilterFreq: 700,  // crackle lives here, not at 2kHz

    reverbWet: 0.82,
    delayWet: 0.09,        // skip artifacts — short ghost repeat
    delayFeedback: 0.08,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'am-radio',
    name: 'AM Radio',
    emoji: '📻',
    description: 'Brutal bandpass, nasal mids, transistor grit. Sounds like a dashboard. At 100%: sounds like a dashboard in 1974, driving through a tunnel, in a lightning storm.',

    // More hi-pass — tighter, thinner, more transistor honk
    hiPass: 560,
    loPass: 3200,
    hiShelfGain: -30,
    loShelfGain: -16,
    midFreq: 1400,
    midGain: 20,

    satWet: 0.96,
    satOrder: 14,

    compThreshold: -6,
    compRatio: 20,

    tremoloDepth: 0.18,
    tremoloFreq: 60,

    noiseLevel: 0.09,
    noiseFilterFreq: 5000,

    reverbWet: 0.06,
    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'reel-to-reel',
    name: 'Reel to Reel',
    emoji: '🎞️',
    // Kinda bad — warble, wow, flutter, and that mono-ish phase collapse of old tape
    description: 'Old tape machine left in a storage unit since 1978. The heads need cleaning. The capstan is slipping. It sounds like it\'s thinking about quitting.',

    hiPass: 60,
    loPass: 11000,
    hiShelfGain: -14,
    loShelfGain: 2,
    midFreq: 500,
    midGain: 2,

    satWet: 0.62,
    satOrder: 4,

    compThreshold: -24,
    compRatio: 5,

    // Heavy warble — chorus collapses stereo width like old azimuth drift
    chorusWet: 0.78,
    chorusFreq: 0.55,

    // Serious wow & flutter — the capstan is slipping
    vibratoDepth: 0.38,
    vibratoFreq: 0.38,

    // Phaser = mono-ish phase collapse, that old tape "center-heavy" sound
    phaserWet: 0.68,

    noiseLevel: 0.11,
    noiseFilterFreq: 6000,

    reverbWet: 0.88,
    delayWet: 0,
    tremoloDepth: 0,
  },

  // ── ROW 2 ────────────────────────────────────────────────────────────────

  {
    id: 'datsun-6x9',
    name: '1988 Datsun',
    emoji: '🚗',
    description: "Rusted floorboards. One working window. A blown driver's side 6x9 held in with a bungee cord since '91. Engine doing its thing underneath. This is your commute. This is your life.",

    hiPass: 160,
    loPass: 3200,
    hiShelfGain: -24,
    loShelfGain: -4,
    midFreq: 1800,
    midGain: 11,

    satWet: 0.92,
    satOrder: 16,

    compThreshold: -10,
    compRatio: 14,

    vibratoDepth: 0.42,
    vibratoFreq: 0.35,

    chorusWet: 0.72,
    chorusFreq: 1.1,

    // Engine rumble — noise filtered way down to ~120Hz = mechanical low-end drone
    // The blown speaker can't reproduce it, but the chassis sure can
    noiseLevel: 0.28,
    noiseFilterFreq: 120,  // this is the engine now

    reverbWet: 0.42,
    delayWet: 0,
  },

  {
    id: 'drive-in',
    name: 'Drive-In Speaker',
    emoji: '🎬',
    description: '1963 parking lot speaker hanging on your car window. Volume knob broke off in 1967. Someone spraypainted SOUND on the pole. Works great.',

    // Super hi-passed — these speakers had nothing below 700Hz, nothing
    hiPass: 750,
    loPass: 3800,
    hiShelfGain: -22,
    loShelfGain: -12,
    midFreq: 1500,
    midGain: 10,

    satWet: 0.72,
    satOrder: 8,

    compThreshold: -14,
    compRatio: 12,

    tremoloDepth: 0.16,
    tremoloFreq: 0.25,

    noiseLevel: 0.12,
    noiseFilterFreq: 3200,

    reverbWet: 0.50,
    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'voicemail-90s',
    name: '90s Voicemail',
    emoji: '📞',
    description: 'You have. Forty-three. New messages. [three second silence] [click]. Recorded at 8kHz over a phone line that also handled fax. Your band sounds like a fax now.',

    // Classic POTS phone EQ — 400Hz HP, 4kHz LP, honk at 1–3kHz
    hiPass: 400,           // nothing below 400Hz on a phone line
    loPass: 4000,          // hard ceiling at 4kHz
    hiShelfGain: -32,      // kill everything above 4k
    loShelfGain: -20,      // kill the lows hard
    midFreq: 1800,         // honkiness center
    midGain: 14,           // big honk — this is the phone "voice"

    satWet: 0.82,
    satOrder: 12,

    compThreshold: -8,
    compRatio: 24,         // broadcast codec crush

    noiseLevel: 0.06,
    noiseFilterFreq: 4500,

    reverbWet: 0.10,
    delayWet: 0.15,
    delayFeedback: 0.12,
    chorusWet: 0,
    vibratoDepth: 0,
    tremoloDepth: 0,
  },

  {
    id: 'vhs-camcorder',
    name: 'VHS Camcorder',
    emoji: '📹',
    // Stereo cassette DNA + reel-to-reel-level wow/warble. Stays wide, falls apart.
    description: "Dad's birthday party, 1993. Panasonic PV-18. Dead battery indicator. Heads cleaning tape that made things worse. The zoom is stuck. Nobody is looking at the camera.",

    hiPass: 65,
    loPass: 7500,
    hiShelfGain: -13,
    loShelfGain: 3,
    midFreq: 2500,
    midGain: 3,

    // Crunchy like cassette but keeping stereo width
    satWet: 0.72,
    satOrder: 7,

    compThreshold: -18,
    compRatio: 8,

    // Head-switching artifacts — fast chorus flutter
    chorusWet: 0.75,
    chorusFreq: 5.2,

    // Max wow/warble like reel-to-reel — slow mechanical speed drift
    vibratoDepth: 0.42,
    vibratoFreq: 0.45,     // slow and lurching, not 28Hz flutter

    noiseLevel: 0.18,
    noiseFilterFreq: 6000,

    reverbWet: 0.62,
    delayWet: 0,
    phaserWet: 0,          // no phaser — stays stereo unlike reel-to-reel
    tremoloDepth: 0,
  },

];

export function getPreset(id) {
  return presets.find(p => p.id === id) ?? presets[0];
}

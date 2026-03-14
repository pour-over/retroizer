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
    loShelfGain: 3,
    midFreq: 900,
    midGain: -3,

    satWet: 0.88,
    satOrder: 8,

    compThreshold: -18,
    compRatio: 6,

    chorusWet: 0.55,
    chorusFreq: 0.8,

    vibratoDepth: 0.28,
    vibratoFreq: 0.6,

    noiseLevel: 0.14,
    noiseFilterFreq: 3500,

    reverbWet: 0.55,   // spring reverb — tape machines had plate/spring, you notice it
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

    phaserWet: 0.28,

    noiseLevel: 0.13,
    noiseFilterFreq: 2200,

    reverbWet: 0.82,   // lush room — the whole point of vinyl room is the room
    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'am-radio',
    name: 'AM Radio',
    emoji: '📻',
    description: 'Brutal bandpass, nasal mids, transistor grit. Sounds like a dashboard. At 100%: sounds like a dashboard in 1974, driving through a tunnel, in a lightning storm.',

    hiPass: 340,
    loPass: 3200,
    hiShelfGain: -28,
    loShelfGain: -14,
    midFreq: 1400,
    midGain: 18,

    satWet: 0.96,
    satOrder: 14,

    compThreshold: -6,
    compRatio: 20,

    tremoloDepth: 0.18,
    tremoloFreq: 60,

    noiseLevel: 0.09,
    noiseFilterFreq: 5000,

    reverbWet: 0.06,   // AM radio is a dry/dead signal — tiny bit of box resonance
    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'reel-to-reel',
    name: 'Reel to Reel',
    emoji: '🎞️',
    description: 'Studio tape machine warmth. Full-ish frequency, subtle saturation, room air. At 100%: the room is a broom closet at a recording school.',

    hiPass: 45,
    loPass: 14000,
    hiShelfGain: -7,
    loShelfGain: 2,
    midFreq: 500,
    midGain: 1,

    satWet: 0.45,
    satOrder: 3,

    compThreshold: -28,
    compRatio: 3.5,

    chorusWet: 0.2,
    chorusFreq: 0.3,

    vibratoDepth: 0.06,
    vibratoFreq: 0.25,

    noiseLevel: 0.04,
    noiseFilterFreq: 8000,

    reverbWet: 0.88,   // studio room — this is THE reel-to-reel sound, make it bloom
    delayWet: 0,
    phaserWet: 0,
    tremoloDepth: 0,
  },

  // ── ROW 2 ────────────────────────────────────────────────────────────────

  {
    id: 'datsun-6x9',
    name: '1988 Datsun',
    emoji: '🚗',
    description: "Rusted floorboards. One working window. A blown driver's side 6x9 held in with a bungee cord since '91. This is your commute. This is your life.",

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

    noiseLevel: 0.18,
    noiseFilterFreq: 2000,

    reverbWet: 0.42,   // small car cabin — short, boxy, you're sitting in a tin can
    delayWet: 0,
  },

  {
    id: 'drive-in',
    name: 'Drive-In Speaker',
    emoji: '🎬',
    description: '1963 parking lot speaker hanging on your car window. Volume knob broke off in 1967. Someone spraypainted SOUND on the pole. Works great.',

    hiPass: 420,
    loPass: 3800,
    hiShelfGain: -20,
    loShelfGain: -9,
    midFreq: 1500,
    midGain: 9,

    satWet: 0.68,
    satOrder: 7,

    compThreshold: -14,
    compRatio: 12,

    tremoloDepth: 0.16,
    tremoloFreq: 0.25,

    noiseLevel: 0.12,
    noiseFilterFreq: 3200,

    reverbWet: 0.50,   // outdoor lot + metal pole + concrete — spacious and hollow
    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'voicemail-90s',
    name: '90s Voicemail',
    emoji: '📞',
    description: 'You have. Forty-three. New messages. [three second silence] [click]. Recorded at 8kHz over a phone line that also handled fax. Your band sounds like a fax now.',

    hiPass: 520,
    loPass: 2800,
    hiShelfGain: -26,
    loShelfGain: -12,
    midFreq: 2000,
    midGain: 6,

    satWet: 0.78,
    satOrder: 12,

    compThreshold: -8,
    compRatio: 22,

    noiseLevel: 0.06,
    noiseFilterFreq: 4500,

    reverbWet: 0.12,   // slight handset/room resonance, stays mostly dry
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
    description: "Dad's birthday party, 1993. Panasonic PV-18. Dead battery indicator. Heads cleaning tape that made things worse. The zoom is stuck. Nobody is looking at the camera.",

    hiPass: 65,
    loPass: 7500,
    hiShelfGain: -12,
    loShelfGain: 3,
    midFreq: 2500,
    midGain: 3,

    satWet: 0.52,
    satOrder: 5,

    compThreshold: -20,
    compRatio: 7,

    chorusWet: 0.48,
    chorusFreq: 4.5,

    vibratoDepth: 0.12,
    vibratoFreq: 28,

    noiseLevel: 0.08,
    noiseFilterFreq: 6000,

    reverbWet: 0.62,   // living room carpet, cheap furniture — warm and boxy
    delayWet: 0,
    phaserWet: 0,
    tremoloDepth: 0,
  },

];

export function getPreset(id) {
  return presets.find(p => p.id === id) ?? presets[0];
}

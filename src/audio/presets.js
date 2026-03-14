/**
 * Retroizer — Preset Definitions
 *
 * Each preset is a plain config object. Values map directly to
 * RetroChain node parameters. Missing keys fall back to chain defaults.
 *
 * Naming rule: the name IS the brand. Keep it evocative, not technical.
 */

export const presets = [
  {
    id: 'broken-cassette',
    name: 'Broken Cassette',
    description: 'Warped tape, muffled highs, quiet hiss. Like a mix left in a hot car.',
    emoji: '📼',

    // EQ — dull the top end like worn tape oxide
    hiPass: 120,
    loPass: 9000,
    hiShelfGain: -8,     // significant treble rolloff
    loShelfGain: 2,      // slight bass bump (tape bump)
    midFreq: 800,
    midGain: -2,

    // Saturation — tape-style soft clip
    satWet: 0.35,
    satOrder: 3,

    // Compression — tape compression feel
    compThreshold: -18,
    compRatio: 5,

    // Chorus — wow & flutter simulation
    chorusWet: 0.15,
    chorusFreq: 0.8,

    // Wow & flutter
    vibratoDepth: 0.04,
    vibratoFreq: 0.6,

    // Noise — tape hiss
    noiseLevel: 0.025,
    noiseFilterFreq: 3500,

    // No reverb, no delay — cassettes were dry
    reverbWet: 0.05,
    delayWet: 0,
  },

  {
    id: 'vinyl-room',
    name: 'Vinyl Room',
    description: 'Warm pressing, surface crackle, the smell of a record store.',
    emoji: '🎵',

    // EQ — RIAA curve approximation, vinyl warmth
    hiPass: 30,
    loPass: 14000,
    hiShelfGain: -5,
    loShelfGain: 4,
    midFreq: 3000,
    midGain: -1.5,

    // Saturation — harmonic richness of analog pressing
    satWet: 0.2,
    satOrder: 2,

    // Compression — light mastering-style
    compThreshold: -20,
    compRatio: 3,

    // Phaser — ever-so-slight cartridge phase artifact
    phaserWet: 0.06,

    // Noise — vinyl surface noise (louder than cassette hiss)
    noiseLevel: 0.04,
    noiseFilterFreq: 2000, // crackle is lower frequency than hiss

    // Small room reverb — like a real listening room
    reverbWet: 0.12,

    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'am-radio',
    name: 'AM Radio',
    description: 'Brutal bandpass, nasal mids, transistor grit. Sounds like a dashboard.',
    emoji: '📻',

    // EQ — AM radio bandwidth is roughly 200Hz–4kHz
    hiPass: 300,
    loPass: 3800,
    hiShelfGain: -12,
    loShelfGain: -6,
    midFreq: 1200,
    midGain: 5,          // pushed nasal mids are the AM signature

    // Saturation — transistor radio distortion
    satWet: 0.5,
    satOrder: 5,

    // Compression — heavily compressed broadcast signal
    compThreshold: -12,
    compRatio: 8,

    // Tremolo — subtle AM carrier modulation artifact
    tremoloDepth: 0.04,
    tremoloFreq: 60,

    // Noise — RF interference / static
    noiseLevel: 0.03,
    noiseFilterFreq: 5000,

    reverbWet: 0,
    delayWet: 0,
    chorusWet: 0,
    vibratoDepth: 0,
  },

  {
    id: 'reel-to-reel',
    name: 'Reel-to-Reel',
    description: 'Studio tape machine warmth. Full frequency, subtle saturation, room air.',
    emoji: '🎞️',

    // EQ — high-quality 2" tape, mostly flat with gentle rolloffs
    hiPass: 40,
    loPass: 16000,
    hiShelfGain: -2,
    loShelfGain: 1.5,
    midFreq: 500,
    midGain: 0.5,

    // Saturation — gentle tape saturation, the "good" kind
    satWet: 0.18,
    satOrder: 2,

    // Compression — subtle tape compression
    compThreshold: -28,
    compRatio: 2.5,

    // Chorus — slight azimuth misalignment artifact
    chorusWet: 0.05,
    chorusFreq: 0.3,

    // Wow & flutter — very subtle, pro machine
    vibratoDepth: 0.01,
    vibratoFreq: 0.25,

    // Noise — very low hiss (pro machine at 30ips)
    noiseLevel: 0.008,
    noiseFilterFreq: 8000,

    // Studio room reverb — pre-delay gives space
    reverbWet: 0.18,

    delayWet: 0,
    phaserWet: 0,
    tremoloDepth: 0,
  },
];

/**
 * Get a preset by id.
 */
export function getPreset(id) {
  return presets.find(p => p.id === id) ?? presets[0];
}

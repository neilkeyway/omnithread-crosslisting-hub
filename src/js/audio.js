// Joyful Web Audio API Synthesizer for Sale Notifications
class HappySaleAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Play an audibly happy, celebratory cash register / chime sound
  playHappySaleChime() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Sparkling celebratory chord arpeggio: C5 (523.25Hz) -> E5 (659.25Hz) -> G5 (783.99Hz) -> C6 (1046.50Hz) -> high bell E6 (1318.51Hz)
      const notes = [
        { freq: 523.25, time: 0.00, dur: 0.35, gain: 0.3 },
        { freq: 659.25, time: 0.08, dur: 0.35, gain: 0.35 },
        { freq: 783.99, time: 0.16, dur: 0.45, gain: 0.4 },
        { freq: 1046.50, time: 0.24, dur: 0.65, gain: 0.5 },
        { freq: 1318.51, time: 0.34, dur: 0.85, gain: 0.45 }
      ];

      // Master gain node
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.7, now);
      masterGain.connect(this.ctx.destination);

      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();

        // Warm bright bell tone: mix sine + triangle
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.freq, now + n.time);

        // Soft attack + sparkling decay envelope
        noteGain.gain.setValueAtTime(0.001, now + n.time);
        noteGain.gain.exponentialRampToValueAtTime(n.gain, now + n.time + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(now + n.time);
        osc.stop(now + n.time + n.dur);
      });

      // Add high shimmering harmonics for extra "sparkle / cash ding"
      const sparkleOsc = this.ctx.createOscillator();
      const sparkleGain = this.ctx.createGain();
      sparkleOsc.type = 'sine';
      sparkleOsc.frequency.setValueAtTime(2093.00, now + 0.35); // C7 chime!
      sparkleGain.gain.setValueAtTime(0.001, now + 0.35);
      sparkleGain.gain.exponentialRampToValueAtTime(0.3, now + 0.37);
      sparkleGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      sparkleOsc.connect(sparkleGain);
      sparkleGain.connect(masterGain);
      sparkleOsc.start(now + 0.35);
      sparkleOsc.stop(now + 1.2);

    } catch (e) {
      console.warn('Audio chime playback notice:', e);
    }
  }

  // Gentle subtle tap for cross-posting completion
  playSyncCompleteSound() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }
}

export const soundFx = new HappySaleAudioEngine();

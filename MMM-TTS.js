/* global Module Log */

/*
 * MagicMirror²
 * Module: MMM-TTS
 *
 * By fewieden https://github.com/fewieden/MMM-TTS
 *
 * MIT Licensed.
 */

Module.register('MMM-TTS', {
  tts: '',

  defaults: {
    debug: false,
    readAtStartup: true,
    speed: 1.0,
    text: 'Your mirror says hello!',
    voice: null,
  },

  start() {
    Log.info(`Starting module: ${this.name}`);
    this.tts = this.config.text;
    this.sendSocketNotification('CONFIG', this.config);
  },

  notificationReceived(notification, payload) {
    if (this.config.readAtStartup && notification === 'ALL_MODULES_STARTED') {
      this.sendSocketNotification('TTS', this.config.text);
    }

    if (notification === 'MMM-TTS') {
      this.sendSocketNotification('TTS', payload);
      this.tts = payload;
      this.updateDom();
    }
  },

  socketNotificationReceived(notification) {
    if (notification === 'HIDE') {
      this.tts = this.config.text;
      this.updateDom();
    }
  },

  getDom() {
    const wrapper = document.createElement('div');
    if (this.config.debug === true) {
      wrapper.classList.add('thin', 'small', 'bright');
      wrapper.innerHTML = this.tts;
    }
    return wrapper;
  },
});

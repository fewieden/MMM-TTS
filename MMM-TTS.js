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
        text: 'MMM-TTS',
        voice: null,
        speed: 1.0,
        debug: false
    },

    start() {
        Log.info(`Starting module: ${this.name}`);
        this.tts = this.config.text;
        this.sendSocketNotification('CONFIG', this.config);
    },

    notificationReceived(notification, payload) {
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
    }
});

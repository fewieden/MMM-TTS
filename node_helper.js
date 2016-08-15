/* Magic Mirror
 * Module: MMM-TTS
 *
 * By fewieden https://github.com/fewieden/MMM-TTS
 *
 * MIT Licensed.
 */

const NodeHelper = require("node_helper");
const tts = require("say");

module.exports = NodeHelper.create({

	start: function() {
		console.log("Starting node helper for: " + this.name);
	},

	socketNotificationReceived: function(notification, payload) {
		if(notification === 'CONFIG'){
			this.config = payload;
		} else if (notification === 'TTS') {
			tts.speak(payload, this.config.voice, this.config.speed, (err) => {
				if(err){console.log(err);}
				this.sendSocketNotification('HIDE', {});
			});
		}
	}
});
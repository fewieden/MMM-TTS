# MMM-TTS [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/fewieden/MMM-TTS/master/LICENSE) [![Build Status](https://travis-ci.org/fewieden/MMM-TTS.svg?branch=master)](https://travis-ci.org/fewieden/MMM-TTS) [![Code Climate](https://codeclimate.com/github/fewieden/MMM-TTS/badges/gpa.svg?style=flat)](https://codeclimate.com/github/fewieden/MMM-TTS) [![Known Vulnerabilities](https://snyk.io/test/github/fewieden/mmm-tts/badge.svg)](https://snyk.io/test/github/fewieden/mmm-tts)

Text-To-Speech module for [MagicMirror²](https://github.com/MichMich/MagicMirror).

## Dependencies

* An installation of MagicMirror².
* npm
* [say](https://www.npmjs.com/package/say)
* [festival](http://www.cstr.ed.ac.uk/projects/festival/)

## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
2. Configure your `~/MagicMirror/config/config.js`:

    ```js
    {
        module: 'MMM-TTS',
        position: 'top_right',
        config: {
            readAtStartup: true,
            speed: 1.0,
            text: 'Hello, have a great day!'
        }
    }
    ```

3. Run command `npm install` in `~/MagicMirror/modules/MMM-TTS` directory.
4. Run command `sudo apt-get install festival`.

## Config Options

| **Option**      | **Default** | **Description** |
| --------------- | ----------- | --------------- |
| `debug`         | `false`     | Display text to speech. |
| `readAtStartup` | `true`      | If set to true: Read the text when you start the mirror. |
| `speed`         | `1.0`       | How fast the speech should be. |
| `text`          | `'Your mirror says hello!'` | Text to speak at startup and to display in debug mode, while there's no text to speech. |
| `voice`         | `null`      | If you want another voice than default you have to install it seperately and then fill in the voice name here. <http://www.festvox.org/docs/manual-2.4.0/festival_24.html#Voices> |

## For Developers

To use MMM-TTS in your module you have to send a socket notification like this `this.sendNotification('MMM-TTS', 'This is a text to read. Hello World!');`.

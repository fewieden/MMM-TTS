# MMM-TTS
Text-To-Speech Module for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)
  * npm
  * [say](https://www.npmjs.com/package/say)
  * [festival](http://www.cstr.ed.ac.uk/projects/festival/)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        module: 'MMM-TTS',
        position: 'top_right',
        config: {
            ...
        }
    }
    ```
 3. Run command `npm install` in `~/MagicMirror/modules/MMM-TTS` directory.
 4. Run command `sudo apt-get install festival`.

## Config Options
| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `debug` | `false` | Display text to speech. |
| `text` | `'MMM-TTS'` | Text to display in debug mode, while there's no text to speech. |
| `voice` | `null` | If you want another voice than default you have to install it seperately and then fill in the voice name here. http://www.festvox.org/docs/manual-2.4.0/festival_24.html#Voices |
| `speed` | `1.0` | How fast the speech should be. |

## For Developers
To use MMM-TTS in your module you have to send a socket notification like this `this.sendNotification('MMM-TTS', 'This is a text to read. Hello World!');`.
'use strict';

var App = App || {};
App.Helpers = App.Helpers || {};

App.Helpers.Common = (function (self) {

    /**
     * Gets Google web font config
     * @param callback
     * @param {Array} fonts
     * @returns {{active: active, google: {families: *}}}
     */
    self.getWebFontConfig = function (callback, fonts) {
        return {
            active: function () {
                game.time.events.add(0, callback, window);
            },
            google: {
                families: fonts
            }
        }
    };

    /**
     * Loads Googleweb font scripts
     */
    self.loadGoogleWebFont = function () {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    };

    /**
     * Add text to the layout
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @param {number} fontSize
     *
     * @return {Phaser.Text}
     */
    self.addText = function (text, x, y, fontSize) {
        var textBlock = game.add.text(
            x,
            y,
            text
        );
        textBlock.anchor.setTo(0.5); // Offsets the anchor point off the text block
        textBlock.font = 'Tangerine';
        textBlock.fontSize = fontSize;
        textBlock.padding.set(10, 16);
        textBlock.inputEnabled = true;

        return textBlock;
    };

    return self;

})(App.Helpers.Common || {});

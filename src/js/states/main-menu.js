'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Main menu state
 */
App.States.MainMenu = (function (self) {

    /**
     * Preload callback
     */
    self.preload = function () {
        game.load.image('parchment', 'img/main-menu/parchment.png');

        WebFontConfig = {
            active: function () {
                game.time.events.add(Phaser.Timer.SECOND, createMenu, window);
            },
            google: {
                families: ['Tangerine']
            }
        };

        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    };

    /**
     * Creation callback for the menu
     */
    self.create = function () {

        // Menu background image
        // game.stage.backgroundColor = "#FFFFFF";
        var parchment = game.add.sprite(-100, -150, 'parchment');
        parchment.scale.setTo(2.5);
        parchment.x = (App.WIDTH - parchment.width) / 2;
        parchment.y = (App.HEIGHT - parchment.height) / 2;
    };

    /**
     * Update callback for the menu
     */
    self.update = function () {
        // console.log('Update main menu');
    };

    /**
     * Creates the menu
     */
    function createMenu() {

        // Game name
        var title = addText(
            App.NAME,
            game.world.centerX,
            game.world.centerY - App.HEIGHT / 4,
            150
        );

        // Play button
        var play = addText(
            'Play',
            game.world.centerX,
            game.world.centerY,
            75
        );
        play.events.onInputOver.add(overMenu, window);
        play.events.onInputOut.add(outMenu, window);
        play.events.onInputDown.add(clickPlay, window);

        // Play button
        var options = addText(
            'Options',
            game.world.centerX,
            game.world.centerY + 80,
            75
        );
        options.events.onInputOver.add(overMenu, window);
        options.events.onInputOut.add(outMenu, window);
        options.events.onInputDown.add(clickOptions, window);
    }

    /**
     * Add text to the layout
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @param {number} fontSize
     *
     * @return {Phaser.Text}
     */
    function addText(text, x, y, fontSize) {
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
    }

    function overMenu(item) {
        item.fill = '#cc0000';
        game.canvas.style.cursor = "pointer";
    }

    function outMenu(item) {
        item.fill = '#000000';
        game.canvas.style.cursor = "default";
    }

    function clickPlay(item) {
        console.log('Click Play');
    }

    function clickOptions(item) {
        console.log('Click Options');
    }

    return self;

})(App.States.MainMenu || {});

game.state.add('main-menu', App.States.MainMenu);
game.state.start('main-menu');
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

        WebFontConfig = App.Helpers.Common.getWebFontConfig(createMenu, ['Tangerine']);
        App.Helpers.Common.loadGoogleWebFont();
    };

    /**
     * Creation callback for the menu
     */
    self.create = function () {

        // Menu background image
        var parchment = game.add.sprite(-100, -150, 'parchment');
        parchment.scale.setTo(2.5);
        parchment.x = (App.WIDTH - parchment.width) / 2;
        parchment.y = (App.HEIGHT - parchment.height) / 2;
    };

    /**
     * Update callback for the menu
     */
    self.update = function () {
        // Nothing at the moment
    };

    /**
     * Creates the menu
     */
    function createMenu() {

        // Game name
        var title = App.Helpers.Common.addText(
            App.NAME,
            game.world.centerX,
            game.world.centerY - App.HEIGHT / 4,
            150
        );

        // Play button
        var play = App.Helpers.Common.addText(
            'Play',
            game.world.centerX,
            game.world.centerY,
            75
        );
        play.events.onInputOver.add(overMenu, window);
        play.events.onInputOut.add(outMenu, window);
        play.events.onInputDown.add(clickPlay, window);

        // Play button
        var options = App.Helpers.Common.addText(
            'Options',
            game.world.centerX,
            game.world.centerY + 80,
            75
        );
        options.events.onInputOver.add(overMenu, window);
        options.events.onInputOut.add(outMenu, window);
        options.events.onInputDown.add(clickOptions, window);
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
        game.state.start('character-selection');
    }

    function clickOptions(item) {
        console.log('Click Options');
    }

    return self;

})(App.States.MainMenu || {});

game.state.add('main-menu', App.States.MainMenu);
game.state.start('main-menu');
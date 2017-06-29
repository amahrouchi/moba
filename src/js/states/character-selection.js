'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Main menu state
 */
App.States.CharacterSelection = (function (self) {

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
        App.Helpers.Common.addText(
            'Character selection',
            game.world.centerX,
            game.world.centerY - App.HEIGHT / 4,
            150
        );
    }

    return self;

})(App.States.CharacterSelection || {});

game.state.add('character-selection', App.States.CharacterSelection);
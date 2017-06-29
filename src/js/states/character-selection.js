'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Main menu state
 */
App.States.CharacterSelection = (function (self) {

    /**
     * List of all available characters
     * @type {[*]}
     */
    var allCharacters = [
        App.Characters.Knight,
        App.Characters.Duellist,
        App.Characters.BlackMagician,
        App.Characters.WhiteMagician
    ];

    /**
     * Preload callback
     */
    self.preload = function () {
        // Load background
        game.load.image('parchment', 'img/main-menu/parchment.png');

        // Load characters sprite
        for (var key in allCharacters) {
            game.load.spritesheet(allCharacters[key].name, allCharacters[key].sprite, 32, 48, 16);
        }

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

        var charNb = 1;
        for (var key in allCharacters) {

            var charDetails = allCharacters[key];

            var char = game.add.sprite(
                game.world.width * charNb / (allCharacters.length + 1),
                game.world.centerY,
                charDetails.name,
                0
            );
            char.anchor.setTo(0.5);
            char.scale.set(4);

            // Animate the character
            char.animations.add(
                'walk',
                charDetails.animations.frontWalk.frames,
                charDetails.animations.frontWalk.speed,
                true
            );
            char.animations.play('walk');

            charNb++;
        }
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
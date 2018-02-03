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

        WebFontConfig = App.Helpers.Common.getWebFontConfig(function(){}, ['Tangerine']);
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

        // Game name
        App.Helpers.Common.addText(
            'Character selection',
            game.world.centerX,
            game.world.centerY - App.HEIGHT / 4,
            150
        );

        var charNb = 1;
        for (var key in allCharacters) {

            var initialFrame = 12;
            var charDetails = allCharacters[key];

            // Display char image
            var char = game.add.sprite(
                game.world.width * charNb / (allCharacters.length + 1),
                game.world.centerY,
                charDetails.name,
                initialFrame
            );
            char.anchor.setTo(0.5);
            char.scale.set(4);
            char.inputEnabled = true;

            // Character animation
            char.animations.add(
                'walk',
                charDetails.animations.frontWalk.frames,
                charDetails.animations.frontWalk.menuSpeed,
                true
            );

            // Animate the char on over
            char.events.onInputOver.add(playCharAnimation.bind(null, char), window);
            char.events.onInputOut.add(stopCharAnimation.bind(null, char, initialFrame), window);
            char.events.onInputUp.add(selectChar.bind(null, charDetails), window);

            // Display char name
            var charName = App.Helpers.Common.addText(
                charDetails.name,
                game.world.width * charNb / (allCharacters.length + 1),
                game.world.centerY + 140,
                40
            );
            charName.inputEnabled = true;

            // Animate the char on over
            charName.events.onInputOver.add(playCharAnimation.bind(null, char), window);
            charName.events.onInputOut.add(stopCharAnimation.bind(null, char, initialFrame), window);
            charName.events.onInputUp.add(selectChar.bind(null, charDetails), window);

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
     * Play the character animation
     * @param item
     */
    function playCharAnimation (item) {
        item.animations.play('walk');
        game.canvas.style.cursor = "pointer";
    }

    /**
     * Stop the character animation
     * @param item
     * @param initialFrame
     */
    function stopCharAnimation(item, initialFrame) {
        item.animations.stop('walk');
        item.frame = initialFrame;
        game.canvas.style.cursor = "default";
    }

    function selectChar(item) {
        App.States.Game.currentChar = item;
        game.state.start('game');
    }

    return self;

})(App.States.CharacterSelection || {});

game.state.add('character-selection', App.States.CharacterSelection);
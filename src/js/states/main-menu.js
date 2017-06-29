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
        console.log('Preload main menu');

        game.load.image('parchment', 'img/main-menu/parchment.png');
    };

    /**
     * Creation callback for the menu
     */
    self.create = function () {
        console.log('Create main menu');

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
        console.log('Update main menu');
    };

    return self;

})(App.States.MainMenu || {});

game.state.add('main-menu', App.States.MainMenu);
game.state.start('main-menu');
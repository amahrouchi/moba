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
    };

    /**
     * Creation callback for the menu
     */
    self.create = function () {
        console.log('Create main menu');
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
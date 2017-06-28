'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Game state
 */
App.States.Game = (function (self) {

    /**
     * Preload callback
     */
    self.preload = function () {
        console.log('Preload game');
    };

    /**
     * Create callback
     */
    self.create = function () {
        console.log('Create game');
    };

    /**
     * Update callback
     */
    self.update = function () {
        console.log('Update game');
    };

    return self;
})(App.States.Game || {});

game.state.add('game', App.States.Game);
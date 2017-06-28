'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Game state
 */
App.States.GameResults = (function (self) {

    /**
     * Preload callback
     */
    self.preload = function () {
        console.log('Preload game results');
    };

    /**
     * Create callback
     */
    self.create = function () {
        console.log('Create game results');
    };

    /**
     * Update callback
     */
    self.update = function () {
        console.log('Update game results');
    };

    return self;
})(App.States.Game || {});

game.state.add('game-results', App.States.GameResults);
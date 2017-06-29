'use strict';

var App = App || {};
App.Characters = App.Characters || {};

App.Characters.Duellist = (function (self) {

    /**
     * The character name
     * @type {string}
     */
    self.name = 'Duellist';

    /**
     * The sprite file
     * @type {string}
     */
    self.sprite = 'img/characters/duellist.png';

    return self;
})(App.Characters.Character || {});
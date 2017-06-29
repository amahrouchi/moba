'use strict';

var App = App || {};
App.Characters = App.Characters || {};

App.Characters.Duellist = (function (self) {

    self.__proto__ = App.Characters.Character;

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
})(App.Characters.Duellist || {});
'use strict';

var App = App || {};
App.Characters = App.Characters || {};

App.Characters.WhiteMagician = (function (self) {

    self.__proto__ = App.Characters.Character;

    /**
     * The character name
     * @type {string}
     */
    self.name = 'White Magician';

    /**
     * The sprite file
     * @type {string}
     */
    self.sprite = 'img/characters/white_magician.png';

    return self;
})(App.Characters.WhiteMagician || {});
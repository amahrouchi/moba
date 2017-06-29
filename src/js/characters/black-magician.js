'use strict';

var App = App || {};
App.Characters = App.Characters || {};

App.Characters.BlackMagician = (function (self) {

    self.__proto__ = App.Characters.Character || {};

    /**
     * The character name
     * @type {string}
     */
    self.name = 'Black Magician';

    /**
     * The sprite file
     * @type {string}
     */
    self.sprite = 'img/characters/black_magician.png';

    return self;
})(App.Characters.BlackMagician || {});
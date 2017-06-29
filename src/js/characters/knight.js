'use strict';

var App = App || {};
App.Characters = App.Characters || {};

App.Characters.Knight = (function (self) {

    /**
     * The character name
     * @type {string}
     */
    self.name = 'Knight';

    /**
     * The sprite file
     * @type {string}
     */
    self.sprite = 'img/characters/knight.png';

    return self;
})(App.Characters.Character || {});
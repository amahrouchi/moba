'use strict';

var App = App || {};
App.Characters = App.Characters || {};

App.Characters.Character = (function (self) {

    /**
     * The character name
     * @type {string}
     */
    self.name = null;

    /**
     * The sprite file
     * @type {string}
     */
    self.sprite = null;

    /**
     * Character animations
     * @type {{frontWalk: {frames: [*], speed: number}, backWalk: {frames: [*], speed: number}, leftWalk: {frames: [*], speed: number}, rightWalk: {frames: [*], speed: number}}}
     */
    self.animations = {
        frontWalk : {
            frames : [0,1,2,3],
            speed : 6
        },
        backWalk : {
            frames : [12,13,14,15],
            speed : 6
        },
        leftWalk : {
            frames : [4,5,6,7],
            speed : 6
        },
        rightWalk : {
            frames : [8,9,10,11],
            speed : 6
        }
    };

    /**
     * The character's movement speed
     * @type {int}
     */
    self.globalMovementSpeed = 100;

    /**
     * Animates the char when walking
     * @param {object} char
     * @param {string} animationType
     */
    self.animateChar = function (char, animationType) {
        for (var type in self.animations) {
            var action = type === animationType ? 'play' : 'stop';
            char.animations[action](type);
        }
    };

    return self;
})(App.Characters.Character || {});

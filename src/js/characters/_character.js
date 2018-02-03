'use strict';

var App        = App || {};
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
            frames    : [0, 1, 2, 3],
            speed     : 8,
            menuSpeed : 6
        },
        backWalk  : {
            frames : [12, 13, 14, 15],
            speed  : 8
        },
        leftWalk  : {
            frames : [4, 5, 6, 7],
            speed  : 8
        },
        rightWalk : {
            frames : [8, 9, 10, 11],
            speed  : 8
        }
    };

    /**
     * The character's movement speed
     * @type {int}
     */
    var globalMovementSpeed = 100;

    /**
     * Launch the player moves while playing
     * @param char
     * @param cursors
     */
    self.moveChar = function (char, cursors) {

        // Reset char movement
        char.body.velocity.y = 0;
        char.body.velocity.x = 0;

        // Move the char
        if (cursors.up.isDown) {
            char.body.velocity.y -= globalMovementSpeed;
        }
        else if (cursors.down.isDown) {
            char.body.velocity.y += globalMovementSpeed;
        }

        if (cursors.left.isDown) {
            char.body.velocity.x -= globalMovementSpeed;
        }
        else if (cursors.right.isDown) {
            char.body.velocity.x += globalMovementSpeed;
        }

        // Animate the char while moving
        if (cursors.left.isDown) {
            animateChar(char, 'leftWalk');
        }
        else if (cursors.right.isDown) {
            animateChar(char, 'rightWalk');
        }
        else if (cursors.up.isDown) {
            animateChar(char, 'backWalk');
        }
        else if (cursors.down.isDown) {
            animateChar(char, 'frontWalk');
        }
        else if (
            cursors.up.isUp
            && cursors.down.isUp
            && cursors.left.isUp
            && cursors.right.isUp
        ) {
            animateChar(char, 'stop');
        }

    };

    /**
     * Animates the char when walking
     * @param {object} char
     * @param {string} animationType
     */
    function animateChar(char, animationType) {
        for (var type in self.animations) {
            var action = type === animationType ? 'play' : 'stop';
            char.animations[action](type);
        }
    }

    return self;

})(App.Characters.Character || {});

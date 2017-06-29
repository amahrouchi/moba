'use strict';

/**
 * Main module
 */
var App = {

    /**
     * Canvas width
     * @type {string}
     */
    NAME : 'Parchemin',

    /**
     * Canvas width
     * @type {number}
     */
    WIDTH : 1200,

    /**
     * Canvas width
     * @type {number}
     */
    HEIGHT : 800

};

var game = new Phaser.Game(App.WIDTH, App.HEIGHT, Phaser.AUTO, 'moba');

var WebFontConfig = {};

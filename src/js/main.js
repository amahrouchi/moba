/**
 * Main module
 */
var App = (function () {

    var self = {};

    /**
     * The canvas width
     * @type {number}
     */
    self.WIDTH = 1200;

    /**
     * The canvas height
     * @type {number}
     */
    self.HEIGHT = 800;

    /**
     * Preload function
     */
    self.preload = function () {
        console.log(game);
    };

    /**
     * Create function
     */
    self.create = function () {

    };

    /**
     * Game update function
     */
    self.update = function () {

    };

    return self;
})();

var game = new Phaser.Game(App.WIDTH, App.HEIGHT, Phaser.AUTO, 'moba', { preload: App.preload, create: App.create, update: App.update });
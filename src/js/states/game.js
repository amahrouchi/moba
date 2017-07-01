'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Game state
 */
App.States.Game = (function (self) {

    /**
     * The character selected by the player
     * @type {null}
     */
    self.currentChar = null;

    /**
     * Preload callback
     */
    self.preload = function () {
        game.load.tilemap('tilemap', 'maps/bosquet/ruins.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('mapTiles', 'maps/bosquet/bosquet_tileset.png');

        game.load.spritesheet(self.currentChar.name, self.currentChar.sprite, 32, 48, 16);
    };

    /**
     * Create callback
     */
    self.create = function () {

        // Create the map
        var map = game.add.tilemap('tilemap');
        map.addTilesetImage('Bosquet', 'mapTiles');

        // Create the layers
        var groundLayer = map.createLayer('Ground');
        var aboveLayer = map.createLayer('PlayerAbove');
        var collisionLayer = map.createLayer('Collision');
        var behindLayer = map.createLayer('PlayerBehind');

        map.setCollisionBetween(1, 100000, true, 'Collision');
        groundLayer.resizeWorld();

        //create player
        var player = game.add.sprite(game.world.centerX, App.HEIGHT - 50, self.currentChar.name, 12);
        this.game.physics.arcade.enable(this.player);

        //the camera will follow the player in the world
        // this.game.camera.follow(this.player);

        //move player with cursor keys
        this.cursors = this.game.input.keyboard.createCursorKeys();


    };

    /**
     * Update callback
     */
    self.update = function () {
        // console.log('Update game');
    };

    return self;
})(App.States.Game || {});

game.state.add('game', App.States.Game);
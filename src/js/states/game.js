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

    self.player = null;

    self.groundLayer = null;
    self.aboveLayer = null;
    self.collisionLayer = null;
    self.behindLayer = null;

    self.cursors = null;

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
        self.groundLayer = map.createLayer('Ground');
        self.aboveLayer = map.createLayer('PlayerAbove');
        self.player = game.add.sprite(game.world.centerX, App.HEIGHT - 50, self.currentChar.name, 12);
        self.collisionLayer = map.createLayer('Collision');
        self.behindLayer = map.createLayer('PlayerBehind');

        map.setCollisionBetween(1, 100000, true, 'Collision');
        self.groundLayer.resizeWorld();

        //create player
        game.physics.arcade.enable(self.player);

        //the camera will follow the player in the world
        // this.game.camera.follow(this.player);

        //move player with cursor keys
        self.cursors = game.input.keyboard.createCursorKeys();


    };

    /**
     * Update callback
     */
    self.update = function () {
        self.player.body.velocity.y = 0;
        self.player.body.velocity.x = 0;

        if(self.cursors.up.isDown) {
            self.player.body.velocity.y -= 100;
        }
        else if(self.cursors.down.isDown) {
            self.player.body.velocity.y += 100;
        }
        if(self.cursors.left.isDown) {
            self.player.body.velocity.x -= 100;
        }
        else if(self.cursors.right.isDown) {
            self.player.body.velocity.x += 100;
        }

        game.physics.arcade.collide(self.player, self.collisionLayer);
    };

    return self;
})(App.States.Game || {});

game.state.add('game', App.States.Game);
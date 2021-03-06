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
     * The game player
     * @type {null}
     */
    self.player = null;

    /**
     * The ground layer
     * @type {null}
     */
    self.groundLayer = null;

    /**
     * The above layer
     * @type {null}
     */
    self.aboveLayer = null;

    /**
     * The collision layer
     * @type {null}
     */
    self.collisionLayer = null;

    /**
     * The foreground layer
     * @type {null}
     */
    self.behindLayer = null;

    /**
     * The cursors
     * @type {null}
     */
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

        // Init collision layer
        map.setCollisionBetween(1, 100000, true, 'Collision');

        // Resize the world
        self.groundLayer.resizeWorld();

        //create player
        game.physics.arcade.enable(self.player);
        self.player.body.collideWorldBounds = true;
        self.player.scale.setTo(0.95);

        // Declare animations
        for (var type in self.currentChar.animations) {
            self.player.animations.add(
                type,
                self.currentChar.animations[type].frames,
                self.currentChar.animations[type].speed,
                true
            );
        }

        // Move player with cursor keys
        self.cursors = game.input.keyboard.createCursorKeys();

    };

    /**
     * Update callback
     */
    self.update = function () {

        // Move the char
        App.Characters.Character.moveChar(self.player, self.cursors);

        // Init collision layer
        game.physics.arcade.collide(self.player, self.collisionLayer);
    };

    return self;
})(App.States.Game || {});

game.state.add('game', App.States.Game);
'use strict';

var App = App || {};
App.States = App.States || {};

/**
 * Main menu state
 */
App.States.MainMenu = (function (self) {

    /**
     * Preload callback
     */
    self.preload = function () {
        game.load.image('parchment', 'img/main-menu/parchment.png');

        WebFontConfig = {
            active: function() { game.time.events.add(Phaser.Timer.SECOND, createMenu, window); },
            google: {
                families: ['Tangerine']
            }
        };

        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    };

    /**
     * Creation callback for the menu
     */
    self.create = function () {

        // Menu background image
        // game.stage.backgroundColor = "#FFFFFF";
        var parchment = game.add.sprite(-100, -150, 'parchment');
        parchment.scale.setTo(2.5);
        parchment.x = (App.WIDTH - parchment.width) / 2;
        parchment.y = (App.HEIGHT - parchment.height) / 2;
    };

    /**
     * Update callback for the menu
     */
    self.update = function () {
        console.log('Update main menu');
    };

    function createMenu() {
        console.log('test !!');

        var text = game.add.text(game.world.centerX, game.world.centerY, "Parchemin");
        text.anchor.setTo(0.5);

        text.font = 'Tangerine';
        text.fontSize = 150;

        //  If we don't set the padding the font gets cut off
        //  Comment out the line below to see the effect
        text.padding.set(10, 16);

        // var grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);
        // grd.addColorStop(0, '#8ED6FF');
        // grd.addColorStop(1, '#004CB3');
        // text.fill = grd;
        //
        // text.align = 'center';
        // text.stroke = '#000000';
        // text.strokeThickness = 2;
        // text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
        //
        // text.inputEnabled = true;
        // text.input.enableDrag();
        //
        // text.events.onInputOver.add(over, this);
        // text.events.onInputOut.add(out, this);
    }
    
    return self;

})(App.States.MainMenu || {});

game.state.add('main-menu', App.States.MainMenu);
game.state.start('main-menu');
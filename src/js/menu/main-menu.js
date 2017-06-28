
var App = App || {};

App.MainMenu = (function () {

    /**
     * Module public content
     * @type {{}}
     */
    var self = {};

    /**
     * Init the main menu
     */
    self.init = function () {
        self.initBackground();
        self.initHeroSelection();
    };

    /**
     * Init the menu background
     */
    self.initBackground = function () {
        console.log('background');
    };

    /**
     * Init the character selection
     */
    self.initHeroSelection = function () {
        console.log('hero');
    };

    return self;
})();
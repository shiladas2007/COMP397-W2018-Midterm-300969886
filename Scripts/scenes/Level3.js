var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var level3 = /** @class */ (function (_super) {
        __extends(level3, _super);
        // Public Properties
        // Constructor
        function level3() {
            var _this = _super.call(this) || this;
            //Ensure carrying over the player's current points and lives to the new scene
            _this._scoreBoard = managers.Game.scoreBoard;
            console.log("score" + _this._scoreBoard.Score);
            console.log("score" + _this._scoreBoard.Lives);
            _this.Start();
            return _this;
        }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        level3.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            //However, setup the controls for the Player so that the Plane starts on the Left hand side of the screen
            // and that he is in a fixed position
            this._plane = new objects.Plane(80, 230);
            //this._plane.setTransform(800,)
            this._plane.setTransform(this._plane.x, this._plane.y, 1, 1, 90);
            this._plane.planeFlash.setTransform(this._plane.planeFlash.x, this._plane.planeFlash.y, 1, 1, 90);
            managers.Game.plane = this._plane;
            this._coin = new objects.Coin(this._plane.x, this._plane.y);
            this._island = new objects.Island(120, 0);
            // instantiate the cloud array
            this._clouds = new Array();
            //this._cloudNum = 3;
            //For Level 3 ensure that there are 3 clouds in the scene.
            this._cloudNum = 3;
            // loop and add each cloud to the array
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(220, 50);
            }
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1; // play forever
            this._engineSound.volume = 0.3;
            // create the scoreboard UI for the Scene
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;
            this.Main();
        };
        // triggered every frame
        level3.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._plane.Update();
            this._coin.x = this._island.x;
            this._coin.y = this._island.y;
            this._coin.Update();
            this._island.Update();
            // check collision between plane and coin
            managers.Collision.Check(this._plane, this._coin);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                // check collision between plane and current cloud
                managers.Collision.Check(_this._plane, cloud);
            });
            // if lives fall below zero switch scenes to the game over scene
            if (this._scoreBoard.Lives <= 0) {
                this._engineSound.stop();
                managers.Game.currentScene = config.Scene.OVER;
            }
            if (this._scoreBoard.Score >= 500) {
                managers.Game.currentScene = config.Scene.LEVEL2;
            }
        };
        // This is where the fun happens
        level3.prototype.Main = function () {
            var _this = this;
            // add the ocean to the scene
            this.addChild(this._ocean);
            // add the island to the scene
            this.addChild(this._island);
            // add the coin to the scene
            this.addChild(this._coin);
            // add the plane to the scene
            this.addChild(this._plane);
            this.addChild(this._plane.planeFlash); // add the plane flashing effect
            // add clouds to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            // add scoreboard labels to the scene
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        return level3;
    }(objects.Scene));
    scenes.level3 = level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=Level3.js.map
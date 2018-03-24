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
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // private instance variables
        // public properties
        // Constructor
        function Island(px, py) {
            var _this = _super.call(this, "island", px, py) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island.prototype.Start = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                this._dy = 5;
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                this._dx = 5;
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL3) {
                this._dx = 5;
            }
            this.Reset();
        };
        // updates the game object every frame
        Island.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Island.prototype.Reset = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
                this.y = -this.height;
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                this.y = Math.floor(Math.random() * 480);
                this.x += this.width;
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL3) {
                this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
                this.x = +this.width;
            }
        };
        // move the object to some new location
        Island.prototype.Move = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                this.y += this._dy;
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                this.x -= this._dx;
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL3) {
                this.x += this._dx;
            }
        };
        // check to see if some boundary has been passed
        Island.prototype.CheckBounds = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                // check lower bounds
                if (this.y >= 480 + this.height) {
                    this.Reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                // check left bounds
                if (this.x <= 0 + this.width) {
                    this.Reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL3) {
                // check right bounds
                if (this.x >= 540 + this.width) {
                    this.Reset();
                }
            }
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
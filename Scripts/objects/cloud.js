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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // private instance variables
        // public properties
        // Constructor
        function Cloud(px, py) {
            var _this = _super.call(this, "cloud", px, py) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Cloud.prototype.Start = function () {
            this.Reset();
        };
        // updates the game object every frame
        Cloud.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Cloud.prototype.Reset = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
                this.y = -this.height;
                this._dx = Math.floor((Math.random() * 4) - 2);
                this._dy = Math.floor((Math.random() * 5) + 5);
                console.log("x:" + this.x + ";y:" + this.y + ";dx:" + this._dx + ";dy:" + this._dy);
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                this.x = +this.width;
                this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
                this._dx = Math.floor((Math.random() * 4) - 2);
                this._dy = Math.floor((Math.random() * 5) + 5);
                console.log("l2:x:" + this.x + ";y:" + this.y + ";dx:" + this._dx + ";dy:" + this._dy);
            }
        };
        // move the object to some new location
        Cloud.prototype.Move = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                this.y += this._dy;
                this.x += this._dx;
                console.log("x:" + this.x + ";y:" + this.y + ";dx:" + this._dx + ";dy:" + this._dy);
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                this.y += this._dy;
                this.x -= this._dx;
                console.log("l2:x:" + this.x + ";y:" + this.y + ";dx:" + this._dx + ";dy:" + this._dy);
            }
        };
        // check to see if some boundary has been passed
        Cloud.prototype.CheckBounds = function () {
            if (managers.Game.currentScene == config.Scene.PLAY) {
                // check lower bounds
                if (this.y >= 480 + this.height) {
                    console.log("x:" + this.x + ";y:" + this.y + ";dx:" + this._dx + ";dy:" + this._dy);
                    this.Reset();
                }
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2) {
                //check left boundary
                if (this.x <= 0 + this.width) {
                    console.log("l2:x:" + this.x + ";y:" + this.y + ";dx:" + this._dx + ";dy:" + this._dy);
                    this.Reset();
                }
            }
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
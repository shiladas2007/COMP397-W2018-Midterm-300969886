module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;
    private _dx: number;

    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.y = -960;
      }
      else if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x = 800;
      }
    }

    // move the object to some new location
    private _move(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.y += this._dy;
      }
      else if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x -= this._dx;
      }

    }

    // check to see if some boundary has been passed
    private _checkBounds(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        if (this.y >= 0) {
          this._reset();
        }
      }
      else if (managers.Game.currentScene == config.Scene.LEVEL2) {
        if (this.x <= 640) {
          this._reset();
        }
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
      this._dy = 5;     
    }
    else if (managers.Game.currentScene == config.Scene.LEVEL2) {
      this.setTransform(this.x,this.y,1,1,90);
      this._dx = 5;      
    }
    this._reset();
    }

    // updates the game object every frame
    public Update(): void {
      this._move();
      this._checkBounds();
    }
  }
}

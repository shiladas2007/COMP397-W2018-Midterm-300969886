module objects {
  export class Cloud extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor(px: number, py: number) {
      super("cloud", px, py);
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this.Reset();
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        this.y = -this.height;
        this._dx = Math.floor((Math.random() * 4) - 2);
        this._dy = Math.floor((Math.random() * 5) + 5);     
        console.log("x:"+this.x+";y:"+this.y+";dx:"+this._dx+";dy:"+this._dy);   
      } else if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x = +this.width;
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        this._dx = Math.floor((Math.random() * 4) - 2);
        this._dy = Math.floor((Math.random() * 5) + 5);
        console.log("l2:x:"+this.x+";y:"+this.y+";dx:"+this._dx+";dy:"+this._dy);   
      }
    }

    // move the object to some new location
    public Move(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.y += this._dy;
        this.x += this._dx;
        console.log("x:"+this.x+";y:"+this.y+";dx:"+this._dx+";dy:"+this._dy);   
      } else if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.y += this._dy;
        this.x -= this._dx;
        console.log("l2:x:"+this.x+";y:"+this.y+";dx:"+this._dx+";dy:"+this._dy);   
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        // check lower bounds
        if (this.y >= 480 + this.height) {
          console.log("x:"+this.x+";y:"+this.y+";dx:"+this._dx+";dy:"+this._dy);   
          this.Reset();
        }
      } else if (managers.Game.currentScene == config.Scene.LEVEL2) {
        //check left boundary
        if (this.x <=0+ this.width) {
          console.log("l2:x:"+this.x+";y:"+this.y+";dx:"+this._dx+";dy:"+this._dy);   
          this.Reset();
        }
      }
    }
  }
}

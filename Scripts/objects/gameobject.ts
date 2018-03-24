module objects {
  export class GameObject extends createjs.Sprite {
    // private instance variables
    protected _dx: number;
    protected _dy: number;

    // public properties
    public width: number;
    public height: number;
    public halfWidth: number;
    public halfHeight: number;
    public isColliding: boolean;

    // constructors
    constructor(imageString:string, px:number, py:number) {
      super(managers.Game.textureAtlas, imageString);
      this.name = imageString;
      //initialize position from super class
      this.x = px;
      this.y = py;      
      this._initialize();
  }
    // private methods
    private _initialize():void {
      //console.log("game"+this.getBounds().width)
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this.isColliding = false;
    }

    // public methods
    public Start(): void {

    }

    public Update(): void {

    }

    public Reset():void {

    }

    public CheckBounds():void {

    }

    public Move():void {

    }
  }
}

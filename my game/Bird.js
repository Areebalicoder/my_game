class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,400,650,0);
    this.image = loadImage("photo/cook.gif");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}

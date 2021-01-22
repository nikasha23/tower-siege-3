class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
    }
  
  
   
  display() {
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    } else{
      //do nothing
      World.remove(world,this.body);
      push();
      this.Visibility-this.Visibility-5;
      tint(255,this.Visibility);
      pop();
    }
  }

  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
       score++
    }
  }
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score=0;

function preload() {

    ballImage= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    ground = new Ground(600,300,350,20);
    base= new Ground(600,390,1200,20);

    box1= new Box(620,235,30,40);
    box2= new Box(640,235,30,40);
    box3= new Box(660,235,30,40);
    box4= new Box(680,235,30,40);
    box5= new Box(700,235,30,40);
    box6= new Box(610,235,30,40);
    

    box7= new Box(600,270,30,40);
    box8= new Box(650,275,30,40);
    box9= new Box(670,275,30,40);
    box10= new Box(690,275,30,40);
    box11= new Box(710,275,30,40);

    //box12= new Box(730,235,30,40);

    ball= Bodies.circle(50,200,20);
    World.add(world,ball);


    slingshot= new SlingShot(this.ball,{x:100,y:200});

}

function draw(){
    background("black");
    Engine.update(engine);

    text("Score: "+score,750,40);

    ground.display();
    base.display();
    fill("green");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    //box12.display();
    fill("pink");
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    slingshot.display();

    //ball.display();
    imageMode(CENTER);
    image(ballImage,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball);
    }
}
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bimg = loadImage("images/boy.png");
	mimg = loadImage("images/mango.png");
	simg = loadImage("images/stone.png");
	timg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	boy = new Ground(200,600,20,20);
	ground = new Ground(600,690,1200,20);
    mango = new Mango(530,180,20,20);
    mango2 = new Mango(500,200,20,20);
    mango3 = new Mango(450,170,20,20);
    mango4 = new Mango(420,190,20,20);
    mango5 = new Mango(430,160,20,20);
	stone = new Stone(90,600,20,20);
	slingShot = new SlingShot(stone.body, {x:110, y:530});
	tree = new Tree(900,450,20,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  tree.display();
  boy.display();
  ground.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingShot.display();
  stone.display();

  imageMode(CENTER);
  
  image(bimg,boy.body.position.x,boy.body.position.y,300,300);
  image(simg,stone.body.position.x,stone.body.position.y,50,50);

  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingShot.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){

	if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x  < lmango.diametre + lstone.diametre
		&&lstone.body.position.y -lmango.body.position.y < lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
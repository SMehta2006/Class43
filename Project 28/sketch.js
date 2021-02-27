
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var player,boy1,boy2,boy3;
var playerImage,boy1Image,boy2Image,boy3Image;
var ball,hoop;
var ballImage,hoopImage;
var backdrop,backdropImage;
var wood,woodImage;

function preload(){
	
	backdropImage = loadImage("images/background.jpeg");
	hoopImage = loadImage("images/hoop.png");
	playerImage = loadImage("images/player1.png");
	boy1Image = loadImage("images/boy1.png");
	boy2Image = loadImage("images/boy2.png");
	boy3Image = loadImage("images/boy3.png");
	woodImage = loadImage("images/wood2.png");
	ballImage = loadImage("images/basketball.png");
}

function setup(){
	createCanvas(1270,600);

	backdrop = createSprite(635,300,1300,600);
	backdrop.addImage("background",backdropImage);
	backdrop.scale = 4.6;
	hoop = createSprite(1200,300,10,40);
	hoop.scale = 0.3;
	hoop.addImage("basketball_hoop",hoopImage);
	player = createSprite(200,490,10,20);
	player.addImage("PC",playerImage);
	player.scale = 0.5;
	boy1 = createSprite(620,490,10,20);
	boy1.addImage("defender1",boy1Image);
	boy1.scale = 0.5;
	boy2 = createSprite(800,490,10,20);
	boy2.addImage("defender2",boy2Image);
	boy2.scale = 0.5;
	boy3 = createSprite(980,490,10,20);
	boy3.addImage("defender3",boy3Image);
	boy3.scale = 0.5;
	wood = createSprite(635,100,20,10);
	wood.addImage("wood",woodImage);
	wood.velocityX = -5;
	ball = createSprite(100,490,10,10);
	ball.addImage("basketball",ballImage);
	ball.scale = .15;
}

function draw(){

	edges = createEdgeSprites();
	wood.bounceOff(edges[0]);
	wood.bounceOff(edges[1]);
	drawSprites();
}


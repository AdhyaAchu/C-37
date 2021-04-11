var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var car1, car2, car3,car4;
var cars;   //array for holding all the 4 car sprites
//create a variable called 'allPlayers' --> store the info (name and distance) of all 4 players
var allPlayers;

function setup(){
  //displayWidth & displayHeight - to stretch the canvas to the entire width and height of the screen
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount===4){
    //update(state) belongs to the Game class
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
  
}

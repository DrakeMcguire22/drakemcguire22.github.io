/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
   var KEY={
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }

  // Game Item Objects
    var positionX = 0;
    var positionY = 0;
    var speedX = 0;
    var speedY = 0;
  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeydown);   // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyup);
 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    

  }
  
  /* 
  Called in response to events.
  */
 
  function handleKeydown(event) {
    if (event.which === KEY.LEFT) {
      console.log("Left Pressed")
      speedX = -5;
    }
    if (event.which === KEY.UP) {
      console.log("Up Pressed")
       speedY = -5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("Right Pressed")
      speedX = +5;
    }
    if (event.which === KEY.DOWN) {
      console.log("Down Pressed")
      speedY = +5;
    }


  }
  function handleKeyup(){
     speedX = 0;
     speedY = 0;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  positionX += speedX;
   positionY += speedY;
}

 function wallCollision(){
    $("#board").width(440);
    $("#board").height(440);
  }

function redrawGameItem(){
  $("#walker").css("left", positionX);
  $("#walker").css("top", positionY);
  $("#walker").css("right", positionX);
  $("#walker").css("bottom", positionY);
}




  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

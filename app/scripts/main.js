'use strict';
$(function(){ 
       var pattern = [];
       var player = [];
       var isPlayerTurn = false;
       var green = $('div.button-green');
       var yellow = $('div.button-yellow');
       var red = $('div.button-red');
       var blue = $('div.button-blue');
  //----------------------------------------------------------player move input

   function playerMove(color) {
     var i = -1;
     if (isPlayerTurn) {
         player.push(color);
         i ++;
         if (player[i] !== pattern[i] || player.length === pattern.length) {
          isPlayerTurn = false;
          if (checkMatch()) {
            // keep building pattern 
          }
          else {
            // start over
            $('div h1.lose').html( 'Wrong move buddy, try again').addClass('animated slideInUp');
            setTimeout(function(){$('div h1.lose').html('').removeClass('animated slideInUp')},3000)
            pattern = [];

          }//pattern not matched
          player = [];
          newRound();
        }//if player is complete
     }//isPLayerTurn
     
   }//function end

   function setupClickHandlers(){
     $('div.button-green').click(function() { playerMove(green);  });
     $('div.button-red').click(function()   { playerMove(red);    });
     $('div.button-yellow').click(function(){ playerMove(yellow); });
     $('div.button-blue').click(function()  { playerMove(blue);   });
  }
//----------------------------------------------------------start the game
$('button').click(function(){
        console.log('the game starts here');
        setupClickHandlers();
        newRound();
   });
//----------------------------------------------------------new round
   function newRound(){
       var playPattern = pattern;
       computerChoose();
       playback(playPattern);
   }
//----------------------------------------------------------playback the pattern
   function playback(playPattern){
       var i = 0;
       var sequence = setInterval(function(){ 
          lightUp(playPattern[i]);
          i ++;
          if ( i >= playPattern.length){
         clearInterval(sequence);
       }
       }, 600); 
   }
//----------------------------------------------------------computer turn     
   function computerChoose(){      
       var choice = Math.random(); 
       if(choice < 0.25 ){
           pattern.push(green);    
       }
       else if(choice < 0.5 ){
           pattern.push(yellow);          
       }
       else if(choice < 0.75 ){
           pattern.push(red);     
       }
       else{
           pattern.push(blue);        
       }
       isPlayerTurn = true;
   }     
//----------------------------------------------------------checks player array when complete
   function checkMatch(){
     for(var i = 0; i <= pattern.length; i++){
       if(player[i] !== pattern[i]){
         return false;
       }
     }
     return true;
   }
//----------------------------------------------------------computer button lights
   function lightUp(color){
    if( color === green){
       $(green).addClass('green-light');
      window.setTimeout(function(){
        $(green).removeClass('green-light');
      }, 300);
    }
    else if( color === yellow ){
       $(yellow).addClass('yellow-light');
      window.setTimeout(function(){
        $(yellow).removeClass('yellow-light');
      }, 300);
    }
    else if( color === red ){
       $(red).addClass('red-light');
      window.setTimeout(function(){
        $(red).removeClass('red-light');
      }, 300);
    }
    else if( color === blue ){
       $(blue).addClass('blue-light');
      window.setTimeout(function(){
        $(blue).removeClass('blue-light');
      }, 300);
    }
   }//function


  //----------------------------------------------------------player button lights  
   $(green).mousedown(function(){
      $(this).addClass('green-light').mouseup(function(){
          $(this).removeClass('green-light');    
      });}); 
  $('div.button-red').mousedown(function(){
      $(this).addClass('red-light').mouseup(function(){
          $(this).removeClass('red-light');
      });});
  $('div.button-yellow').mousedown(function(){
      $(this).addClass('yellow-light').mouseup(function(){
            $(this).removeClass('yellow-light');      
      });});
  $('div.button-blue').mousedown(function(){
      $(this).addClass('blue-light').mouseup(function(){
            $(this).removeClass('blue-light');    
      });});     

});
'use strict';
$(function(){	
       var pattern = [];
       var player = [];
       var isPlayerTurn = false;

  //----------------------------------------------------------player move input

   function playerMove(color) {
     if (isPlayerTurn) {
        player.push(color);
        if (player.length === pattern.length) {
          isPlayerTurn = false;
          if (checkMatch()) {
            // celebrate a win
            // keep building pattern
            console.log('YOU WIN: NEXT ROUND');

          }
          else {
            // start over
            console.log('YOU LOSE: STARTING OVER');
            pattern = [];
          }
          player = [];
          computerChoose();
        }
     }
     else {
       console.log('It is not your turn.');
     }
   }

   function setupClickHandlers(){
     $('div.button-green').click(function() { playerMove('green');  });
     $('div.button-red').click(function()   { playerMove('red');    });
     $('div.button-yellow').click(function(){ playerMove('yellow'); });
     $('div.button-blue').click(function()  { playerMove('blue');   });
  }

//----------------------------------------------------------start the game
   
$('button').click(function(){
        console.log('the game starts here');
        setupClickHandlers();
        computerChoose();
   });
//----------------------------------------------------------computer turn     
   function computerChoose(){
            
       var choice = Math.random(); 
       if(choice < 0.25 ){
           pattern.push('green');
           
       }
       else if(choice < 0.5 ){
           pattern.push('yellow');
                 
       }
       else if(choice < 0.75 ){
           pattern.push('red');
               
       }
       else{
           pattern.push('blue');
               
       }
       console.log('The computer pattern is: ' + pattern);
       isPlayerTurn = true;
   }     
        
//----------------------------------------------------------checks player array as it builds
   function checkMatch(){
     for(var i = 0; i <= pattern.length; i++){
       if(player[i] !== pattern[i]){
         return false;
       }
     }
     console.log('NICE!');
     return true;
   }
       
      
//----------------------------------------------------------player button lights  
   $('div.button-green').mousedown(function(){
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
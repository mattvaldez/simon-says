'use strict';
$(function(){	
       var pattern = [];
       var player = [];              
//----------------------------------------------------------start the game
   
$('button').click(function(){
        console.log('the game starts here');
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
       console.log(pattern);
       playerMove();
           
   }
//----------------------------------------------------------player move input
   function playerMove(){
    if( color = green){
      player.push('green');
      console.log(player);
    }
    else if( color = red){
      player.push('red');
      console.log(player);
    }
    else if( color = yellow){
      player.push('yellow');
      console.log(player);
    }
    else if( color = blue){
      player.push('blue');
      console.log(player);
    }
    checkPlayer();


   } 
//----------------------------------------------------------player array builder
   function checkPlayer(){
    var i = 0;
    var x = pattern[i].length;
    var y = player[0].length;
      if (x === y){
        console.log('move matched, continue');
        player=[];
      }
      else{
        console.log('sorry, try again');
        player = [];
        pattern = [];
      }
    computerChoose();
    console.log(pattern +' pattern');
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
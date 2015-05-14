//'use strict';

$(function(){	
       var pattern = [];
       var player = [];              
//----------------------------------------------------------start the game

$('button').click(function(){
        computerChoose();
        console.log(pattern);
   })

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
       gameFlow();
       return pattern;
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
//----------------------------------------------------------player move input
   function playerMove(){
   
   $('div.button-green').click(function(){
    player.push('green')
    console.log(player);
    gameFlowEnd();
   });
   $('div.button-yellow').click(function(){
    player.push('yellow')
    console.log(player);
    gameFlowEnd();
   });
   $('div.button-red').click(function(){
    player.push('red')
    console.log(player);
    gameFlowEnd();
   });
   $('div.button-blue').click(function(){
    player.push('blue')
    console.log(player);
    gameFlowEnd();
   });

   return player;
    }
 
    
   

//-----------------------------------------------------------real time array comparison
  function gameFlow(){
    console.log('the game starts here');
    playerMove();

}
//-----------------------------------------------------------ultimate array comparison
function gameFlowEnd(){
  
    var man = player.length;
    var machine = pattern.length;
     
    if(man === machine){
      
      console.log(player +' player array for this round');
      
      console.log(man, machine, + ' array lengths just compared');
      player =[];    
  }  
    else{
      console.log('wrong');
      player =[];
      pattern = [];
    }
  console.log(pattern + ' this is the end of the round');
  console.log(player + ' players array for new round');
  computerChoose();
} 




});
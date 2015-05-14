$(function(){	
       var pattern = [];
       var player = [];              
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
   $('div.button-green').click(function(){
           player.push('green');
           console.log(player);
           return player;
   });
   $('div.button-yellow').click(function(){
           player.push('yellow');
           return player;
   });
   $('div.button-red').click(function(){
           player.push('red');
           return player;
   });
   $('div.button-blue').click(function(){
           player.push('blue');
   });      return player; 
//----------------------------------------------------------start the game
 function startGame(){
   $('div.button-start').click(function(){
        
        console.log(pattern);
   }); 

 }


//-----------------------------------------------------------compare arrays
 function playAgain(){
  var man = _.last(player);
  var machine = _.last(pattern);
  if(man === machine){
    computerChoose();
  }
  else{
    alert('try again');
  }
 } 

});
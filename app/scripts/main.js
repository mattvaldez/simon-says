$(function(){	
       var pattern = [];
       var player = [];
       
       //var green = $(function(){$('div.button-green').addClass('green-light').removeClass('green-light');});
       //var yellow = $(function(){$('div.button-yellow').addClass('yellow-light').removeClass('yellow-light');});
       //var red = $(function(){$('div.button-red').addClass('red-light').removeClass('red-light');});
       //var blue = $(function(){$('div.button-blue').addClass('blue-light').removeClass('blue-light');});
     
  

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

   


  


//----------------------------------------------------------player turn	
	

   $('div.button-green').mousedown(function(){
      $(this).addClass('green-light').mouseup(function(){
          $(this).removeClass('green-light');
          player.push('green');
          console.log(player);
      });
      });
          
   
  
  $('div.button-red').mousedown(function(){
  		$(this).addClass('red-light').mouseup(function(){
          $(this).removeClass('red-light');
          player.push('red');
          console.log(player);
      });
      });
          
   
  
  $('div.button-yellow').mousedown(function(){
  		$(this).addClass('yellow-light').mouseup(function(){
            $(this).removeClass('yellow-light');
            player.push('yellow');
            console.log(player);
      });
      });
          
   
  $('div.button-blue').mousedown(function(){
  		$(this).addClass('blue-light').mouseup(function(){
            $(this).removeClass('blue-light');
            player.push('blue');
            console.log(player);
      });
      });
          
 function playAgain(){
  var match = (player.length == pattern.length) && player.every(function(element, index){
    return element === pattern[index]
  });
  if(match = true){
    computerChoose();
  }
  
  else{
    alert('try again');
  }
}  
      
computerChoose();
console.log(pattern);
playAgain();



});


  

  




$(function(){	
       var pattern = [];
       var choice = Math.random(); 
       var green = $(function(){$('div.button-green').addClass('green-light').removeClass('green-light');});
       var yellow = $(function(){$('div.button-yellow').addClass('yellow-light').removeClass('yellow-light');});
       var red = $(function(){$('div.button-red').addClass('red-light').removeClass('red-light');});
       var blue = $(function(){$('div.button-blue').addClass('blue-light').removeClass('blue-light');});

  

//----------------------------------------------------------computer pattern
       
   function computerTurn(){
       
    
           
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
       return pattern;
   }


  


//----------------------------------------------------------player input	
	$('div.button-green').mousedown(function(){
		$(this).addClass('green-light').mouseup(function(){
          $(this).removeClass('green-light');
		});
    });

$('div.button-red').mousedown(function(){
		$(this).addClass('red-light').mouseup(function(){
          $(this).removeClass('red-light');
		});
    });

$('div.button-yellow').mousedown(function(){
		$(this).addClass('yellow-light').mouseup(function(){
          $(this).removeClass('yellow-light');
		});
    });

$('div.button-blue').mousedown(function(){
		$(this).addClass('blue-light').mouseup(function(){
          $(this).removeClass('blue-light');
		});
    });
});
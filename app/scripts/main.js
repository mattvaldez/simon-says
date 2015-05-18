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
              pattern = [];
              window.setTimeout(function(){ $('div h1.lose').html( '').removeClass('animated slideInUp');},2500);
              }//pattern not matched
              window.setTimeout(function(){
              player = [];
              newRound();
              },2500);

        }//if player is complete
     }//isPLayerTurn
   }//function end

   function setupClickHandlers(){
     $('div.button-green').click(function() { playerMove(green);   });
     $('div.button-red').click(function()   { playerMove(red);     });
     $('div.button-yellow').click(function(){ playerMove(yellow);  });
     $('div.button-blue').click(function()  { playerMove(blue);    });
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
       $('div h2.new-round').html( 'New Round').addClass('animated bounceInDown');
       window.setTimeout(function(){ $('div h2.new-round').html( '').removeClass('animated bounceInDown');},2500);
       computerChoose();
       playback(playPattern);
       score();

   }
//----------------------------------------------------------computer will playback the pattern
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
//----------------------------------------------------------score board
   function score(){
    var round = _.size(pattern) -1;
    var display = round.toString();
    $('[data-score = 0]').html(display);
   }
//----------------------------------------------------------computer button lights and sound
   function lightUp(color){
    if( color === green){
       $(green).addClass('green-light');
       playSoundA();
      window.setTimeout(function(){
        $(green).removeClass('green-light');
      }, 300);
    }
    else if( color === yellow ){
       $(yellow).addClass('yellow-light');
       playSoundC();
      window.setTimeout(function(){
        $(yellow).removeClass('yellow-light');
      }, 300);
    }
    else if( color === red ){
       $(red).addClass('red-light');
       playSoundE();
      window.setTimeout(function(){
        $(red).removeClass('red-light');
      }, 300);
    }
    else if( color === blue ){
       $(blue).addClass('blue-light');
       playSoundF();
      window.setTimeout(function(){
        $(blue).removeClass('blue-light');
      }, 300);
    }
   }//function


  //----------------------------------------------------------player button sounds
      $(green).on('click', function(){
        playSoundA();});
      
      $(yellow).on('click', function(){
        playSoundC();});
      
      $(red).on('click', function(){
        playSoundE();});
      
      $(blue).on('click', function(){
        playSoundF();});

  
   
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
  //----------------------------------------------------------sound function
  function playSoundA(){
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/68437__pinkyfinger__piano-a.wav" type="audio/wav" />');
    $('[data-action=sound]').html(audio);
  }
  function playSoundC(){
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/68440__pinkyfinger__piano-c.wav" type="audio/wav" />');
    $('[data-action=sound]').html(audio);
  }
  function playSoundE(){
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/68443__pinkyfinger__piano-e.wav" type="audio/wav" />');
    $('[data-action=sound]').html(audio);
  }
  function playSoundF(){
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/68445__pinkyfinger__piano-f.wav" type="audio/wav" />');
    $('[data-action=sound]').html(audio);
  }
});
RPS = {
	display: function(leapmotion_frame) {
    
    var result = '';
    $('#result').removeClass();
    if (leapmotion_frame.hands !== undefined){
	    	if (leapmotion_frame.hands.length == 1 && (leapmotion_frame.pointables.length == 0 ||leapmotion_frame.pointables.length == 1)){
	        result = 'rock';
    	}else{ 
	        switch (leapmotion_frame.pointables.length){
	            case 5:
	            case 4:
	              result = 'paper';
	              break;
	            case 3:
	            case 2:
	              result = 'scissors';
	              break;
	            default:
	              result = 'DEFORRRMEE!!';

	        }
      } 
      $('#result').addClass(result);
      $('#hands').html(leapmotion_frame.hands.length);
      $('#fingers').html(leapmotion_frame.pointables.length);    
    }
  }
}
RPS = {
	_:{
		results:{
			rock:'rock',
			paper:'paper',
			scissors:'scissors'
		}
	},
	active: false,
	last_result: null,
	display: function(leapmotion_frame) {
		if (!RPS.active) return;
		var result = null;
		if (leapmotion_frame.hands !== undefined){
			if (leapmotion_frame.hands.length == 1 
				&& (leapmotion_frame.pointables.length == 0 ||leapmotion_frame.pointables.length == 1)) {
				result = RPS._.results.rock;
			} else { 
				switch (leapmotion_frame.pointables.length) {
					case 5:
					case 4:
						result =  RPS._.results.paper;
						break;
					case 3:
					case 2:
						result =  RPS._.results.scissors;
						break;
					default:
						result = null;

				}
			}
			if (RPS.last_result == null && result != null){
				RPS.last_result = result;
				setTimeout(function (){
					if (RPS.last_result !== null){
						console.log('result', RPS.last_result);
						RPS.active = false;
						bot_result = RPS.bot_result();
						winner = RPS.winner(RPS.last_result, bot_result);
						$('#winner').html(winner);
						//display bot result
						$('#bot').addClass(bot_result);
						$('#player').addClass(RPS.last_result);
						RPS.last_result = null;
					}
				}, 500);
			}
			if (result !== null){
				RPS.last_result = result;
			}
			$('#hands').html(leapmotion_frame.hands.length);
			$('#fingers').html(leapmotion_frame.pointables.length); 

		}
	},
	bot_result: function (){
		switch (Math.floor(Math.random() * 3 + 1)){
			case 1:
				return RPS._.results.rock;
			case 2:
				return RPS._.results.paper;
			case 3:
				return RPS._.results.scissors;
		}
	},
	winner: function (player_result, bot_result){
		
		if (player_result == bot_result) return 'nobody';
		
		if ((player_result == RPS._.results.rock && bot_result == RPS._.results.scissors) ||
			(player_result == RPS._.results.scissors && bot_result == RPS._.results.paper) ||
			(player_result == RPS._.results.paper && bot_result == RPS._.results.rock))
			 return 'player';
		
		return 'bot';

	}
}














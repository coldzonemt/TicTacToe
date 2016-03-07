var app = angular.module('TicTacToe', []); 

app.controller('game', ['$scope', function($scope){

	//For later, create function to generate array of rows and columns	
	// $scope.rows = [0,1,2]; 
	// $scope.columns = [0,1,2]; 
	
	$scope.player1 = 'X'; 
	$scope.player2 = 'Y'; 
	$scope.winner = false; 
	$scope.turn = 0; 

	//Initialize a game (is this necessary if I have a 'global' $scope.turn variable?) 
	playGame = function(){
		//reset turns to 0
		$scope.turn = 0; 
		//reset board buttons all to "unclicked" state
	}

	//every time there is a turn, we need to do the following: 
	$scope.playTurn = function(){
		var winner = checkWinner(); 
		if($scope.turn %2 === 0) {
			console.log('X');
		} else {
			console.log('O');
		}

		//if there is a winner
		if(winner){
			//check to see who just placed a letter (x or y?)

			//return statement to excit function and declare winner
		} 

		//increment turn
		$scope.turn ++;

		if($scope.turn === 9) {
			//alert players of a tie
			console.log("game over, and it's a tie");
			//create a new button that asks if user wants to play a new game 
			playGame(); 
		}
	}

	//returns a boolean if there is a winner or not
	checkWinner = function(){
		return false; 
	}
}]);


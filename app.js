var app = angular.module('TicTacToe', []); 

app.controller('game', ['$scope', function($scope){

	//For later, create function to generate array of rows and columns	
	// $scope.rows = [0,1,2]; 
	// $scope.columns = [0,1,2]; 
	
	$scope.player1 = 'X'; 
	$scope.player2 = 'Y'; 
	$scope.winner = false; 
	$scope.turn = 0; 

	//every time there is a turn, we need to do the following: 
	$scope.playTurn = function(){
		$scope.winner = $scope.checkWinner(); 
		$scope.turn ++; 
		//if there is a winner
		if(winner){
			//check to see who just placed a letter (x or y?)

			//return statement to excit function and declare winner
		}
		console.log($scope.turn); 
	}

	//returns a boolean if there is a winner or not
	$scope.checkWinner = function(){

	}
}]);


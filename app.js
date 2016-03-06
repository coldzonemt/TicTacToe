var app = angular.module('TicTacToe', []); 

app.controller('game', ['$scope', function($scope){

	
	$scope.rows = [0,1,2]; 
	$scope.columns = [0,1,2]; 
	

	$scope.player1 = 'X'; 
	$scope.player2 = 'Y'; 
	$scope.winner = null; 
	$scope.turn = 0; 

	//every time there is a turn, we need to do the following: 
	$scope.playTurn = function(){
		$scope.checkWinner(); 
		$scope.turn ++; 
	}

}])


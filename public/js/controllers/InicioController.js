angular.module('adivinhacao').controller('InicioController',
	function($routeParams, $scope, Jogo)
	{
		var defaultQuantity = 4;
		var game = Jogo.newGame(defaultQuantity);

		$scope.assertation = [0,0,0,0];
		$scope.game = game;

		$scope.compare = function()
		{
			Jogo.compare(game, $scope.assertation);
		}

	});
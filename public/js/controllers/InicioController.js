angular.module('adivinhacao').controller('InicioController',
	function($routeParams, $scope, Jogo)
	{
		var defaultQuantity = 5;
		var game = Jogo.newGame(defaultQuantity);

		var assertation = new Array(defaultQuantity);
		assertation.fill("_");
		
		$scope.assertation = assertation;
		$scope.game = game;

		$scope.compare = function()
		{
			Jogo.compare(game, $scope.assertation);
		}
	});
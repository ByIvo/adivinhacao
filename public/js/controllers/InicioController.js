angular.module('adivinhacao').controller('InicioController',
	function($routeParams, $scope, Jogo)
	{
		var defaultQuantity = 10;
		var game = Jogo.newGame(defaultQuantity);

		var assertation = new Array(defaultQuantity);
		assertation.fill("_");

		var cssColum = (
				function()
				{
					var column = defaultQuantity > 6 ? 1 : 2;
					var offset = Math.ceil((12 - (defaultQuantity * column)) / 2);

					return {
						'offset': 	'col-lg-offset-' + offset,
						'column':	'col-lg-' + column
					};
				}
		)();
		
		$scope.cssColum = cssColum;
		$scope.assertation = assertation;
		$scope.game = game;

		$scope.compare = function()
		{
			Jogo.compare(game, $scope.assertation.map(function(val){return parseInt(val)}));
		}
	});
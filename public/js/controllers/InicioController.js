angular.module('adivinhacao').controller('InicioController',
	function($scope, $location,$rootScope)
	{
		$scope.hasGame = true;
		if(isNaN($rootScope.difficulty))
		{
			$rootScope.difficulty= 4;
		}

		$scope.play = function()
		{
			$location.url('jogo');
		};

		$scope.continue = function()
		{
			
		};

		$scope.highscore = function()
		{

		}
		
	});
angular.module('adivinhacao').controller('JogoController',
	function($scope,$rootScope,$location, Game)
	{
		if(isNaN($rootScope.difficulty))
		{
			$location.url('/');
			return;
		}

		newGame();
		$scope.cssColum = getCssColumnCount();
		$scope.compare = compare;
		$scope.result = {}

		//clicks
		$scope.playAgain = function()
		{
			newGame();
		}

		$scope.menu = function()
		{
			$location.url('/');
		}

		//functions

		function newGame()
		{
			this.game = Game.new($rootScope.difficulty);
			resetAssertation();

			$scope.game = this.game;
		}

		function resetAssertation()
		{
			this.assertation = new Array(game.length);
			this.assertation.fill(undefined);

			$scope.assertation = this.assertation;
		}

		function compare()
		{
			if(!this.assertation.every(elem => elem != undefined))
			{
				$scope.formTry.$error.msg='Você deve preencher todos os campos!';
				return;
			}

			$scope.result = game.compare(this.assertation);
			resetAssertation();
		};

		function getCssColumnCount()
		{
			var sizes = ['xs','sm','md','lg'];
			var column = game.length > 6 ? 1 : 2;
			var offset = Math.ceil((12 - (game.length * column)) / 2);

			var columnSizes = _.map(sizes,function(value){return "col-"+value+"-"+column});
			var offsetSizes = _.map(sizes,function(value){return "col-"+value+"-offset-"+offset});
	
			return {
				'offset': offsetSizes.join(' '),
				'column': columnSizes.join(' '),
			};
		};
});
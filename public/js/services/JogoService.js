var available = _.range(10);

angular.module('adivinhacao').service('Jogo', function()
	{
		var games = [];

		function newGame($quantity)
		{
			var game = _.sample(available, $quantity);
			var tries = [];

			console.log(game);

			var length = function()
				{
					return game.length;
				};

			return 	{
				'game': game,
				'tries': tries,
				'length': length
			};
		};

		var compare = function (game, userTry)
		{
			var result = _.test_adivinhacao(game.game, userTry);
			game.tries.push({'userTry': userTry, 'resultado': result});

			return result.corretos == game.length();
		};

		return {'games' : games, 'newGame': newGame, 'compare' : compare};

	});
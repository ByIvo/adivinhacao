
angular.module('adivinhacao').service('Game', function()
	{
		function newGame($difficulty)
		{
			var available = _.range(10);
			var selected = _.sample(available, $difficulty);
			var hasEnded = false;
			var length = selected.length;
			var tries = [];


			function compare(userTry)
			{
				var result = _.test_adivinhacao(this.selected, userTry);
				this.tries.push({'userTry': userTry, 'resultado': result});

				this.hasEnded = result.corretos == this.length;

				if(this.hasEnded)
				{
					return {
						'tries': this.tries,
						'selected': this.selected.slice(0)
					};
				}

				return {};
			};
			
			return 	{
				'selected': selected,
				'tries': tries,
				'length': length,
				'compare': compare,
				'hasEnded': hasEnded
			};
		};

		return {'new': newGame};
	});
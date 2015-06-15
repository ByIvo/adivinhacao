var App = angular.module('adivinhacao',['ngRoute']);

App.config(function($routeProvider)
{
	$routeProvider
		.when('/', 
		{
			templateUrl: 'partials/Inicio.html',
			controller: 'InicioController'
		})
		.when('/jogo',
		{
			templateUrl: 'partials/Jogo.html',
			controller: 'JogoController'
		})
});

_.mixin({
	test_adivinhacao: 
		function(correctNumbers, userAssertation)
		{
			var contidos = _.intersection(correctNumbers, userAssertation).length;
			var corretos = _.map(userAssertation, 
				function(value, index)
				{
					return value == correctNumbers[index];
				});

			corretos = _.compact(corretos).length;

			var formatado = contidos + "/" + corretos;

			return {
				'contidos' : contidos,
				'corretos' : corretos,
				'formatado': formatado
			};
		}
});
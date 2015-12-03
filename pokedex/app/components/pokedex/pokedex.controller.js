angular.module('pokedex')
	.controller('PokeController', function (PokeFactory) {
		console.log('pokeController');

		var vm = this;

		vm.pokedex = new PokeFactory();

		vm.result = vm.pokedex.searches;

		vm.types = [
			{value: 'pokemon', text: 'Search Pokemon (name/ID)'}, 
			{value: 'type', text: 'Search Types'}, 
			{value: 'move', text: 'Search Moves'}, 
			{value: 'ability', text: 'Search Abilities'}, 
			{value: 'egg-group', text: 'Search Egg Groups'}];

		vm.phase = 'search';
		vm.qType = 'pokemon';
		vm.qVal = '1';

		vm.changePhase = function(phase) {
			vm.phase = phase;
		};

		vm.isPhase = function(phase) {
			return vm.phase === phase;
		};

		vm.submitSearch = function (search) {
			console.log(search);
			vm.qType = search.qType;
			vm.qVal = search.qVal;
			vm.pokedex.dexSearch(vm.qType, vm.qVal);
			console.log(vm.pokedex);
			window.setTimeout(function (){vm.result = vm.pokedex.searches;}, 1000);
		};
	});
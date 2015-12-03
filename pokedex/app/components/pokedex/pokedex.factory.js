angular.module('pokedex')
	.factory('PokeFactory', function (PokeService) {

	var Pokedex = function() { // constructor

		this.searches = [];
		this.busy = false;
		// var after;

		this.dexSearch = function(qType, qVal) {
			var self = this;

			if (this.busy) {
				return;
			}
			this.busy = true;

			PokeService.searchDex(qType, qVal)
				.then(function (data) {

					console.log(data);

					self.searches.push(data);
					console.log(self.searches);

					self.busy = false;
				});
		};
	};
	return Pokedex;
});
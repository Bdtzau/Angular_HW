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

					var result = data;

					result.qType = qType;

					if (result.sprites) {
						PokeService.getSprite(result.sprites[0].resource_uri)
							.then(function (data) {
								result.image = data;
							});
					}

					if (result.descriptions) {
						var rArray = [];
						var rMax = 0;
						angular.forEach(result.descriptions, function(desc) {
							rArray.push(Math.random());
						});
						rMax = Math.max(...rArray);

						PokeService.getRandDesc(result.descriptions[rArray.indexOf(rMax)].resource_uri)
							.then(function (data) {
								result.randDesc = data;
							});
					}

					console.log(result);
					

					self.searches.unshift(result);
					console.log(self.searches);

					self.busy = false;
				});
		};
	};
	return Pokedex;
});
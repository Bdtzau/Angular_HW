angular.module('reddit')
	.factory('RedditFactory', function(RedditService) {

		var Reddit = function () {

			this.items = [];
			this.busy = false;
			var after = this.after = '';

			this.nextPage = function() {
				
				var self = this;

				if (this.busy) {
					return;
				}
				this.busy = true;

				RedditService.nextPage(this.after)
					.then(function (data) {

						var results = data.data.children;
						console.log(results);

						angular.forEach(results, function(item) {
							self.items.push(item.data);
						});

						self.after = data.data.after;
						self.busy = false;
					});
			};
		};
		return Reddit;
	});
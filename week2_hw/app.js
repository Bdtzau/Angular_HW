(function() {
	var app = angular.module('library', []);

	app.controller('LibraryController', function($scope, $http) {
		

		$scope.wines = [];

		// $("form[name='searchForm']").submit(function(e) {
		// 	e.preventDefault();
		// 	var q = $("#wine_query").val();
			
		// });

		$scope.submit = function() {
			if ($scope.wine_query) {
				$http.get("http://services.wine.com/api/beta2/service.svc/JSON/catalog?apikey=1c4d7de7a3c76e7afc2cdf365ae30113&size=10&search=" + $scope.wine_query).
					success(function(data, status, headers, config) {
						console.log(data);
						$scope.wines = data.Products.List;
					}).
					error(function(data, status, headers, config) {
						console.log(status);
						$scope.wines = [];
					});
			}
		};

		
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(tabIndex) {
			this.tab = tabIndex;
		};

		this.isSelected = function(tabIndex) {
			return this.tab === tabIndex;
		};
	});

	
	
})();
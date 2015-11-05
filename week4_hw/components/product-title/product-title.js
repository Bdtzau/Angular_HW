console.log("product-title component loaded");

angular.module('store')
	.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/product-title/product-title.html',
			replace: true,
			transclude: true,
			scope: {
				// product: "="
				// = two-way binding
				// @ text binding
				// & one-way binding
			},
			controller: function($scope) {
				// console.log('directive controller loaded', $scope);
			},
			controllerAs: 'ctrl',
			bindToController: {
				product: '='
			},
			link: function(scope, element, attrs) {
				// console.log('scope: ', scope);
				// console.log('element: ', element);
				// console.log('attrs: ', attrs);
			}
		};
	});
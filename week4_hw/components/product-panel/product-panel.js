angular.module('store')
	.directive('productPanel', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/product-panel/product-panel.html',
			replace: true,
			transclude: true,
			scope: {
				// product: "="
				// = two-way binding
				// @ text binding
				// & one-way binding
			},
			controller: function($scope) {
				// app.controller('PanelController', function() {
					console.log('panel controller');

					this.tab = 1;

					this.selectTab = function(tabIndex) {
						this.tab = tabIndex;
					};

					this.isSelected = function(tabIndex) {
						return this.tab === tabIndex;
					};
				// });
			},
			controllerAs: 'panels',
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
angular.module('store')
	.directive('dyDate', function() {
		return {
			restrict: 'E',
			templateUrl: 'components/dy-date/dy-date.html',
			replace: true,
			transclude: true,
			scope: {
				// product: "="
				// = two-way binding
				// @ text binding
				// & one-way binding
			},
			controller: function($scope) {
				console.log('directive controller loaded', $scope);
				$scope.date = new Date();
			},
			controllerAs: 'ctrl',
			bindToController: {
				// date: "="
			},
			link: function(scope, element, attrs) {
				console.log("dy-date loaded", scope.ctrl.date);
				// console.log('scope: ', scope);
				// console.log('element: ', element);
				// console.log('attrs: ', attrs);
			}
		};
	});
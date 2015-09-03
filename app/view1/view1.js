'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.directive('happyFish', function() {
  return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel){

			ngModel.$parsers.push(function toView(viewValue){
				return viewValue + '!';
			});

		}
  };
})

.controller('View1Ctrl', ['$scope', function($scope) {


}]);

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
.directive('addFish', function() {
  return {
		scope: {
			fishy: '='
		},
		restrict: 'A',
		template: '<img class="freakyFish">',
		link: function(scope, element, attrs){
			console.log(element);
			var myImgTag = element.find('img');
			myImgTag.attr('src', scope.fishy);
		}
  };
})
.controller('View1Ctrl', ['$scope', function($scope) {
	$scope.showMe = false;
	$scope.trout = "bluefish";

	$scope.myFish = [
		'crappy',
		'catfish',
		'minnow'
	];

	$scope.imageFish = 'http://i.imgur.com/6kGBW01.jpg';

	$scope.addAFish = function () {
		$scope.myFish.push($scope.moreFish);
		$scope.showFreakyFish($scope.moreFish);
	};

	$scope.showFreakyFish = function (fish) {
		if (fish.toLowerCase() === 'anglerfish') {
			$scope.showMe = true;
		}
		else {
			$scope.showMe = false;
		}
	};
}]);

angular.module('myApp', [])
.directive('happy', function() {
  return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel){
			console.log('yolo');

			var toView function(modelValue){
				console.log(modelValue)
				return modelValue + '!';
			};

			var toModel = function(viewValue){
				console.log(viewValue);
				return viewValue + '!';
			};

			ngModel.$formatters.unshift(toView);
      ngModel.$parsers.unshift(toModel);
		}
  };
});

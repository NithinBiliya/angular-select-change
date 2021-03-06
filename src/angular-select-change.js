// github link - https://github.com/NithinBiliya/angular-select-change

(function(){
	angular.module('as.change', [])

	.directive('asChange', function() {
	  return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
		  if(element[0].tagName== 'SELECT') {
			var clickCounter=0;
			
			element.bind("click", function(){
			  if(clickCounter==1) {
				if(attrs.asChange=="autoFocusOff") {
				  element[0].blur();
				} else {
				  if(attrs.asChange.split(';')[0].trim()=="autoFocusOff") {
					scope.$eval(attrs.asChange.split(';')[1].trim());
					element[0].blur();
				  } else {
					scope.$eval(attrs.asChange);
				  }
				}
				clickCounter=0;
			  } else {
				clickCounter++;
			  }
			});
			
			element.bind("blur", function(){
			  clickCounter=0;
			});
		  }
		}
	  };
	});
})();
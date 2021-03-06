(function(){
	'use strict';

	angular.module('musicstore.search')

	.controller('SearchController' , ['$scope' , '$location' , '$rootScope', 'SearchFactory' ,
	 function($scope , $location , $rootScope , SearchFactory){
		$scope.searchInput = '';
		$scope.search_query_results = [];
		


		$scope.$watch('searchInput' , function(val){
			// console.log(val);
			var count = val.length;
			if ( count >= 3 ) {
				// console.log('value is bigger then 3 chars');
				SearchFactory.searchAlbum(val)
				.then(function(response){
					// console.log(response);
					angular.forEach(response , function(each_result){
						console.log(each_result);
						$scope.search_query_results.push(each_result);
						return ;
					});
				}, function(error){
					console.log(error);
				})
			} else{
				return;
			}
			return;
		});
	}]);		
})();

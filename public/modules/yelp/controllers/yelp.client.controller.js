'use strict';

angular.module('yelp').controller('YelpController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		var client = require('../../../config/env/yelp');

		$scope.api = function() {
			
			$location.path('yelp');
			

			client.yelp.search({term: 'food', location: 'Montreal'}, function(error, data) {
			  console.log(error);
			  console.log(data);
			});
		};
	}
]);
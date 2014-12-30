'use strict';

// Setting up route
angular.module('yelp').config(['$stateProvider',
	function($stateProvider) {
		// Yelp state routing
		$stateProvider.
		state('listyelp', {
			url: '/yelp',
			templateUrl: 'modules/yelp/views/list-yelp.client.view.html'
		});
	}
]);
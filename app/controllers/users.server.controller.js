'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./users/users.authentication.server.controller'),
	require('./users/users.authorization.server.controller'),
	require('./users/users.password.server.controller'),
	require('./users/users.profile.server.controller')
);

// var yelp = require('yelp').createClient({
//   consumer_key: 'z9ZJGiqysEN3lAmY_1avUA', 
//   consumer_secret: 'my4TeKx3LvZMmb2h051vYI7Ppwo',
//   token: 'dBSr4fnERdPHDGOy9BP6g0Dx9_0rsZqG',
//   token_secret: 'goHBejF9NzBIJtKgunQ16EUVlb0'
// });

// yelp.search({term: 'food', location: 'Vancouver'}, function(error, data) {
//   console.log(error);
//   console.log(data);
// });
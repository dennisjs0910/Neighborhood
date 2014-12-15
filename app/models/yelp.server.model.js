'use strict';
var eric = require('../../config/env/yelp.js');

eric.yelp.search({term: 'food', location: 'Montreal'}, function(error, data) {
  console.log(error);
  console.log(data);
});

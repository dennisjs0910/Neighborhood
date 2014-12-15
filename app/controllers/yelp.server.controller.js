'use strict';

var _ = require('lodash');

console.log(yelp);
yelp.search({term: 'food', location: 'Montreal'}, function(error, data) {
  console.log(error);
  console.log(data);
});
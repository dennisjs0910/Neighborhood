'use strict';
var yelp = require('yelp').createClient({
  consumer_key: 'z9ZJGiqysEN3lAmY_1avUA', 
  consumer_secret: 'my4TeKx3LvZMmb2h051vYI7Ppwo',
  token: 'RtLkt4LO8LM4CfHlAVMcafyfiKNqjxO0',
  token_secret: 'ooGSsZO7WmluGcpGxfzqg8DzNg0'
});
yelp.search({term: 'food', location: 'Montreal'}, function(error, data) {
  console.log(error);
  console.log(data);
});

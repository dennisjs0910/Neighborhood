'use strict';

var yelp = require('yelp').createClient({
  consumer_key: 'z9ZJGiqysEN3lAmY_1avUA', 
  consumer_secret: 'my4TeKx3LvZMmb2h051vYI7Ppwo',
  token: 'dBSr4fnERdPHDGOy9BP6g0Dx9_0rsZqG',
  token_secret: 'goHBejF9NzBIJtKgunQ16EUVlb0'
});

exports.yelp = yelp;

'use strict';

var _array = [];
var cached_data = localStorage.getItem('haus_tumblrPosts');

if(cached_data) {
  _array = JSON.parse(cached_data);
}

module.exports = _array;

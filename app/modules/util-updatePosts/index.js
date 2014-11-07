'use strict';

var ajax = require('component-ajax')

module.exports = function(callback) {
  ajax({
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

    success: function (result) {
      var remote_posts = result.response.posts.reverse();
      localStorage.setItem('haus_tumblrPosts', JSON.stringify(remote_posts));
      callback(remote_posts)
    },

    error: function () {
      console.log('no connection, using local data');
    }
  });
}
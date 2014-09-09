'use strict';

var ajax = require('component-ajax')
var emitter = require('util-emitter')

module.exports = function() {
  ajax({
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

    success: function (result) {
      var remote_posts = result.response.posts.reverse();
      emitter.emit('tumblr-updated', remote_posts)
      localStorage.setItem('haus_tumblrPosts', JSON.stringify(remote_posts));
    },

    error: function () {
      console.log('no connection, using local data');
    }
  });
}


var ajax = require('component-ajax');
var Ractive = require('ractive/build/ractive.runtime');
var initDoors = require('../doors');
var emitter = require('../../utilities/tower-events');
var Velocity = require('../../utilities/velocity');

var _array = [],
    cached_data = localStorage.getItem('haustraliaer_towerPosts');

if(cached_data) {
  _array = JSON.parse(cached_data);
}

module.exports = function(el){

  var ractive = new Ractive({
    el: el,
    template: require('./index.ract').template,
    data: {
      posts: _array,
    }
  });

  initDoors(ractive.nodes.doors)

  emitter.emit('doors-loaded', ractive.get('posts'))

  var door1 = ractive.nodes['door1']
  var door2 = ractive.nodes['door2']

  ractive.on('animate', function(){
    Velocity.animate(door1, {scale: 2.0}, 300, 'spring', undefined);
  })

  ajax({
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

    success: function (result) {

      var remote_posts = result.response.posts.reverse();
      ractive.set('posts', remote_posts);
      localStorage.setItem('haustraliaer_towerPosts', JSON.stringify(remote_posts));
      emitter.emit('doors-loaded', ractive.get('posts'))
    },

    error: function () {
      console.log('no connection, using local data');
    }
  });

  return ractive;
}

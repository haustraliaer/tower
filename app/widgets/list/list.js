
var ajax = require('component-ajax');
var Ractive = require('ractive/build/ractive.runtime');
var sampleData = require('./list-data');
var fadeTransition = require('../../utilities/transitions/fader');
Ractive.transitions.fader = fadeTransition;

var _array = [],
    cached_data = localStorage.getItem('haustraliaer_towerPosts');

if(cached_data) {
  _array = JSON.parse(cached_data);
}

module.exports = function(el){
  
  var ractive = new Ractive({
    el: el,
    template: require('./list.ract'),
    data: { 
      greeting: 'hello', 
      recipient: '...ractive',
      posts: _array,
      transitions: {
        fader: fadeTransition
      }
    }
  });

  ajax({
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

    success: function (result) {

      var remote_posts = result.response.posts.reverse();
      ractive.set('posts', remote_posts);
      localStorage.setItem('haustraliaer_towerPosts', JSON.stringify(remote_posts));
    },

    error: function () {
      console.log("nope - couldn't connect");
    }
  });

  return ractive;
}

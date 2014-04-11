
var $ = require('jquery');
var Ractive = require('ractify');
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


  $.ajax({
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

    success: function (result) {

      var local_posts = ractive.get('posts'),
          local_length = local_posts.length,
          remote_posts = result.response.posts.reverse(),
          temp_posts = local_posts;

      $(remote_posts).each(function(index) {

        if((index + 1) > local_length) {
          var object = {
            id: this.id,
            body: this.body
          };

          local_posts.push(object);

          console.log('pushed new object');
        }
      });

      ractive.set('posts', local_posts);
      localStorage.setItem('haustraliaer_towerPosts', JSON.stringify(local_posts));

      // todo... remove deleted posts by diffing the ajax result with local data
      
    },

    error: function () {
      console.log("nope - couldn't connect");
    }
  });

  return ractive;
}

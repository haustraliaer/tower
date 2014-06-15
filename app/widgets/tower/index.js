
var ajax = require('component-ajax');
var Ractive = require('ractive/build/ractive.runtime');
var initRooms = require('../rooms');
var emitter = require('../../utilities/tower-events');
var Velocity = require('velocity-animate');

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

  initRooms(ractive.nodes.rooms)

  emitter.emit('posts-loaded', ractive.get('posts'))

  var elems = [
    {
      el: ractive.nodes['tower_icon1'],
      duration: 700
    },
    {
      el: ractive.nodes['tower_icon2'],
      duration: 900
    },
    {
      el: ractive.nodes['tower_img'],
      duration: 800
    },
    {
      el: ractive.nodes['tower_text'],
      duration: 800,
      delay: 400,
      complete: transitionIntoTower
    }
  ]

  ractive.on('animate', function(){
    elems.forEach(function(elem){

      var options = {
        duration: elem.duration,
        easing: 'ease'
      }

      if(elem.delay !== undefined) {
        options.delay = elem.delay
      }

      if(elem.complete !== undefined) {
        options.complete = elem.complete
      }

      var props = {
        translateY: '-100%',
        opacity: 0
      }

      Velocity.animate(elem.el, props, options)

    })
  })
// 94 91 90
  function transitionIntoTower() {
    var el = document.getElementsByTagName("html")[0];
    var props = {
      backgroundColorRed: '94',
      backgroundColorGreen: '94',
      backgroundColorBlue: '94'
    }

    Velocity.animate(el, props, 300)
  }

  ajax({
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    url:       'http://api.tumblr.com/v2/blog/haustraliaer.tumblr.com/posts/text?api_key=CC7nUBprgWxMr9hA85r5uqmXikN9GcSwlrygvmFKVGdFjE7cPy&filter=text',

    success: function (result) {

      var remote_posts = result.response.posts.reverse();
      ractive.set('posts', remote_posts);
      localStorage.setItem('haustraliaer_towerPosts', JSON.stringify(remote_posts));
      emitter.emit('posts-loaded', ractive.get('posts'))
    },

    error: function () {
      console.log('no connection, using local data');
    }
  });

  return ractive;
}

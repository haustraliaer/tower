
var Ractive = require('ractive/build/ractive.runtime');
var emitter = require('../../utilities/tower-events');

module.exports = function(el){

  var ractive = new Ractive({
    el: el,
    template: require('./index.ract').template,
    data: {
      // qrtusv123456!@#$%^()
      fleuron: 'v'
    }
  });

  emitter.on('posts-loaded', function(posts){
    ractive.set('posts', posts);
  });

  return ractive;
}

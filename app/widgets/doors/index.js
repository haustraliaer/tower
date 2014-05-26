
var Ractive = require('ractive/build/ractive.runtime');
var sampleData = require('./dummy-data');
var emitter = require('../../utilities/tower-events');
// var fadeTransition = require('../../utilities/transitions/fader');
// Ractive.transitions.fader = fadeTransition;

module.exports = function(el){
  
  var ractive = new Ractive({
    el: el,
    template: require('./index.ract').template
  });

  emitter.on('doors-loaded', function(posts){
    ractive.set('posts', posts);
  });

  return ractive;
}

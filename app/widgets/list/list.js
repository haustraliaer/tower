
var Ractive = require('ractify');
var sampleData = require('./list-data');
var fadeTransition = require('../../utilities/transitions/fader');
Ractive.transitions.fader = fadeTransition;

module.exports = function(el){
  
  var ractive = new Ractive({
    el: el,
    template: require('./list.ract'),
    data: { 
      greeting: 'hello', 
      recipient: '...ractive',
      posts: sampleData,
      transitions: {
          fader: fadeTransition
      }
    }
  });

  return ractive;
}





var Ractive = require('ractive/build/ractive.runtime');
var animations = require('./animations');

Ractive.transitions.topIn = animations.topIn;
Ractive.transitions.topOut = animations.topOut;
Ractive.transitions.bottomIn = animations.bottomIn;
Ractive.transitions.bottomOut = animations.bottomOut;
Ractive.transitions.trapdoorIn = animations.trapdoorIn;
Ractive.transitions.trapdoorOut = animations.trapdoorOut;

module.exports = function(el){
  
  var ractive = new Ractive({
    el: el,
    template: require('./index.ract').template,
    data: {
      transitions: {
        topIn: animations.topIn,
        topOut: animations.topOut,
        bottomIn: animations.bottomIn,
        bottomOut: animations.bottomOut,
        trapdoorIn: animations.trapdoorIn,
        trapdoorOut: animations.trapdoorOut
      }
    }
  });

  return ractive;
}
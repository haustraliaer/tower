'use strict';

var fadeTransition = function ( t, params ) {
  var props, options;

  // Process parameters (second argument provides defaults)
  params = t.processParams( params, {
    duration: 300,
    opacity: t.isIntro ? 1.0 : 0
  });

  props = {
    opacity: params.opacity
  }

  options = {
    duration: params.duration,
    easing: 'linear'
  }

  // Then, we execute the transition itself
  t.animateStyle(props, options, t.complete(true));
}


module.exports = fadeTransition;
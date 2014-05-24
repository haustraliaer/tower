

function topIn(t, params) {

  var targetStyle, props, collapsed, defaults;

  defaults = {
    duration: 800,
    easing: 'ease'
  };

  props = [
    'transform',
    'opacity'
  ];

  collapsed = {
    transform: 'translateY(100px)',
    opacity: 0
  };

  params = t.processParams( params, defaults );

  targetStyle = t.getStyle( props );
  t.setStyle( collapsed );

  t.animateStyle( targetStyle, params ).then( t.complete );
}

function topOut(t, params){}



function bottomIn(t, params){

  var targetStyle, props, collapsed, defaults;

  defaults = {
    duration: 800,
    easing: 'ease'
  };

  props = [
    'transform',
    'opacity'
  ];

  collapsed = {
    transform: 'translateY(100px)',
    opacity: 0
  };

  params = t.processParams( params, defaults );

  targetStyle = t.getStyle( props );
  t.setStyle( collapsed );

  t.animateStyle( targetStyle, params ).then( t.complete );
}
function bottomOut(t, params){}



function trapdoorIn(t, params){
 var targetStyle, props, collapsed, defaults;

  defaults = {
    duration: 1000,
    easing: 'ease',
    delay: 600
  };

  props = [
    'opacity'
  ];

  collapsed = {
    opacity: 0
  };

  params = t.processParams( params, defaults );

  targetStyle = t.getStyle( props );
  t.setStyle( collapsed );

  t.animateStyle( targetStyle, params ).then( t.complete );
}


function trapdoorOut(t, params){}


module.exports = {
  topIn: topIn,
  topOut: topOut,
  bottomIn: bottomIn,
  bottomOut: bottomOut,
  trapdoorIn: trapdoorIn,
  trapdoorOut: trapdoorOut
}
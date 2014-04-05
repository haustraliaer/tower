
var Ractive = require('ractify');

module.exports = function(el){
  
  var ractive = new Ractive({
    el: el,
    template: require('./list.ract'),
    data: { 
      greeting: 'Hello', 
      recipient: 'world' 
    }
  });

  return ractive;
}

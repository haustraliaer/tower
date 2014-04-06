
var Ractive = require('ractify');

module.exports = function(el){
  
  var ractive = new Ractive({
    el: el,
    template: require('./list.ract'),
    data: { 
      greeting: 'yep', 
      recipient: '...sweet' 
    }
  });

  return ractive;
}

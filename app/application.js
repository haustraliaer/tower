/**
 * @jsx React.DOM
 */

'use strict';

var React = window.React = require('react')
var emitter = require('util-emitter')
var _array = require('util-checkLocalStorage')

var getTumblrPosts = require('util-updatePosts')()

emitter.on('tumblr-updated', function(data) {
  // TODO: pipe this into react app state...
  _array = data;
})

var room_components = [
  require('tower-room-0'),
  require('tower-room-1'),
  require('tower-room-2'),
  require('tower-room-3'),
  require('tower-room-4'),
  require('tower-room-5')
]

var Rooms = [];
room_components.forEach(function(component, index) {
  // TODO: handle rooms vs tumblr array
  // I think that the tumblr array needs to be boss
  var text = _array[index].body
  Rooms.push(<component key={index} text={text} />)
})

var Tower = React.createClass({
  render: function() {
    return (
      <div>{Rooms}</div>
    )
  },
})

// maybe put a loader here..

React.renderComponent(
  <Tower />,
  document.getElementById('app')
)

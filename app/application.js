/**
 * @jsx React.DOM
 */

'use strict';

var React = window.React = require('react')
var _array = require('util-checkLocalStorage')

var getTumblrPosts = require('util-updatePosts')(function(newPosts) {
  _array = newPosts;
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
  Rooms.push(<component key={index} />)
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

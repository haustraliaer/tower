/**
 * @jsx React.DOM
 */

'use strict';

var React = window.React = require('react')
var getTumblrPosts = require('util-updatePosts')()

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

// for each room, create a door.

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

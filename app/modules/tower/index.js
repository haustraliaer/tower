/**
 * @jsx React.DOM
 */

var React = require('react')

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

module.exports = Tower

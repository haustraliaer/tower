/**
 * @jsx React.DOM
 */

var React = require('react')

// for each room, create a door.

var roomManifest = require('util-roomManifest')

var Room = React.createClass({
  render: function() {
    var RoomExtended = roomManifest[this.props.key + ''];
    if(RoomExtended !== undefined) {
      return (<RoomExtended key={this.props.key} text={this.props.text} />)
    }
    return (
      <div>
        <h2>A basic room {this.props.key}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  },
})

module.exports = Room

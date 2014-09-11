/**
 * @jsx React.DOM
 */

var React = require('react')

// for each room, create a door.

var roomManifest = require('util-roomManifest')

var Room = React.createClass({
  render: function() {
    var roomExtended = roomManifest[this.props.key + ''];
    if(roomExtended !== undefined) {
      return (<roomExtended key={this.props.key} text={this.props.text} />)
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

/**
 * @jsx React.DOM
 */

var React = require('react')

// for each room, create a door.

var Room = React.createClass({
  render: function() {
    return (
      <div>
        <h2>room {this.props.key}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  },
})

module.exports = Room


/**
 * @jsx React.DOM
 */

var React = require('react')

// for each room, create a door.

var Room = React.createClass({
  render: function() {
    return (
      <div>room {this.props.key}</div>
    )
  },
})

module.exports = Room


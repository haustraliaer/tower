/**
 * @jsx React.DOM
 */

var React = require('react')

var Room = React.createClass({
  render: function() {
    return (
      <div>
        <h2>A custom room {this.props.key}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  },
})

module.exports = Room


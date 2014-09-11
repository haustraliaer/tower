/**
 * @jsx React.DOM
 */

var React = require('react')

// for each room, create a door.

var roomManifest = require('util-roomManifest')

var Room = React.createClass({
  render: function() {

    var Extension;
    var roomExtension = roomManifest[this.props.key + ''];
    if(roomExtension !== undefined) {
      Extension = <roomExtension />
    }

    return (
      <div>
        <h2>room {this.props.key}</h2>
        <p>{this.props.text}</p>
        {Extension}
      </div>
    )
  },
})

module.exports = Room

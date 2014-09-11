/**
 * @jsx React.DOM
 */

'use strict';

var React = window.React = require('react')
var Room = require('component-room')
var getTumblrPosts = require('util-updatePosts')
var _array = require('util-checkLocalStorage')

var initialRooms = [];

_array.forEach(function(post, index) {
  initialRooms.push(<Room key={index} text={post.body}/>)
})

var Tower = React.createClass({

  getInitialState: function() {
    return {
      rooms: initialRooms
    }
  },

  componentDidMount: function() {
    getTumblrPosts(function(newPosts) {
      var temp_array = []
      newPosts.forEach(function(post, index) {
        temp_array.push(<Room key={index} text={post.body}/>)
      })
      this.setState({
        rooms: temp_array
      })
    }.bind(this))
  },

  render: function() {
    return (
      <div>{this.state.rooms}</div>
    )
  },
})

// maybe put a loader here..

React.renderComponent(
  <Tower />,
  document.getElementById('app')
)

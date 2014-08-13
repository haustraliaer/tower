/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react')
var Velocity = require('app-velocity')
var appEl = document.getElementById('app')

var divStyle = {
  cursor: 'pointer',
  padding: '30px'
}

var App = React.createClass({
  animateMe: function() {
    var el = this.refs.myDiv.getDOMNode()
    Velocity.animate(el, {opacity: [0.3, 1]})
  },
  render: function() {
    return <div
      style={divStyle}
      onClick={this.animateMe}
      ref="myDiv">Dot, {this.props.name}!</div>
  }
})

React.renderComponent(<App name="ditto" />, appEl)

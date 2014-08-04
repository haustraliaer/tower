/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react')

var App = React.createClass({
  render: function() {
    return <div>Dot, {this.props.name}!</div>
  }
})

React.renderComponent(
  <App name="ditto" />,
  document.getElementById('app')
)

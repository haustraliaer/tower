/**
 * @jsx React.DOM
 */

'use strict';

var React = window.React = require('react')
var Tower = require('app-tower')


// maybe put a loader here..

React.renderComponent(
  <Tower />,
  document.getElementById('app')
)

/**
 * @jsx React.DOM
 */

'use strict';

var React = window.React = require('react')
var Tower = require('app-tower')
var Velocity = require('velocity-animate');

Velocity(document.body, {opacity: 0.5}, 2000).then(function(){
  console.log('resolved');
});


// maybe put a loader here..

React.renderComponent(
  <Tower />,
  document.getElementById('app')
)

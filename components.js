var React = require('react');
var ReactDOM = require('react-dom');

var MyComponentClass = React.createClass({
  render: function () {
    return <h1>Hello world</h1>;
  }
});

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');


var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
  
  render: function () {
    return <div></div>;
  }
});

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
var Child = require('./Child');

var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
  
  render: function () {
    return <Child name={this.state.name}/>;
  }
});

ReactDOM.render(<Parent />, document.getElementById('app'));

var React = require('react');

var Child = React.createClass({
  render: function () {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
});

module.exports = Child;

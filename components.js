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

var React = require('react');
var ReactDOM = require('react-dom');
var ChildClass = require('./ChildClass');

var ParentClass = React.createClass({
  getInitialState: function () {
    return { totalClicks: 0 };
  },

  handleClick: function () {
    var total = this.state.totalClicks;

    this.setState(
      { totalClicks: total + 1 }
    );
  }
});

var React = require('react');
var ReactDOM = require('react-dom');
var ChildClass = require('./ChildClass');

var ParentClass = React.createClass({
  getInitialState: function () {
    return { totalClicks: 0 };
  },

  handleClick: function () {
    var total = this.state.totalClicks;
    this.setState(
      { totalClicks: total + 1 }
    );
  },

  render: function () {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
});

var React = require('react');
var ReactDOM = require('react-dom');

var ChildClass = React.createClass({
  render: function () {
    return (

      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
});

module.exports = ChildClass;

var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');

var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
  
  changeName: function (newName) {
    this.setState({
      name: newName
    });
  },

  render: function () {
    return (
    	<Child 
    		name={this.state.name} />
    );
  }
});

ReactDOM.render(
	<Parent />, 
	document.getElementById('app')
);

var React = require('react');

var Child = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names">
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
});

module.exports = Child;

var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');

var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
  
  changeName: function (newName) {
    this.setState({
      name: newName
    });
  },

  render: function () {
    return (
    	<Child 
    		name={this.state.name} 
        onChange={this.changeName} />
    );
  }
});

ReactDOM.render(
	<Parent />, 
	document.getElementById('app')
);


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
    	<Child name={this.state.name} />
	    <Sibling name={this.state.name} />
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
         <select 
          id="great-names" 
          onChange={this.handleChange} >
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
var Sibling = require('./Sibling');

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

var React = require('react');

var Sibling = React.createClass({
  render: function () {
    var name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
});

module.exports = Sibling;

var React = require('react');
var ReactDOM = require('react-dom');

var styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me!  I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

var React = require('react');

var styles = {
  color: 'darkcyan',
  background: 'mintcream'
};

var StyledClass = React.createClass({
  render: function () {
    return (
      <h1 style={styles}>
        Hello world
      </h1>
    );
  }
});

module.exports = StyledClass;

var React = require('react');
var ReactDOM = require('react-dom');
var styles = {
  background: 'lightblue',
  color:      'darkred',
		marginTop: "100px",
		fontSize: "50px"
}

var styleMe = <h1 style={styles}>Please style me!  I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');
var AttentionGrabber = require('./AttentionGrabber');
var styles = require('./styles')
var divStyle = {
  background: styles.background,
  height:     '100%' 
};
var Home = React.createClass({
  render: function () {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
});

ReactDOM.render(
	<Home />, 
	document.getElementById('app')
);

var React = require('react');
var styles = require('./styles')
var h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};
var AttentionGrabber = React.createClass({
	render: function () {
		return <h1 style={h1Style}>WELCOME TO MY HOMEPAGE!</h1>;
	}
});

module.exports = AttentionGrabber;

var fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
var background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
var fontSize   = '4em';
var padding = '45px 0';
var color  = 'green';

module.exports = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};

var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('./facebookStyles');

var divStyle = {
  backgroundColor: styles.darkBlue,
  color:           styles.white
};

var Wow = React.createClass({
  render: function () {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
});

ReactDOM.render(
	<Wow />, 
	document.getElementById('app')
);
var React = require('react');
var ReactDOM = require('react-dom');
var GuineaPigs = require('../components/GuineaPigs');

var GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

var GuineaPigsContainer = React.createClass({
  getInitialState: function () {
    return { currentGP: 0 };
  },

  nextGP: function () {
    var current = this.state.currentGP;
    var next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  },

  interval: null,

  componentDidMount: function () {
    this.interval = setInterval(this.nextGP, 5000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    var src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
});

ReactDOM.render(
  <GuineaPigsContainer />, 
  document.getElementById('app')
);

var React = require('react');

var GuineaPigs = React.createClass({
  render: function () {
    var src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
});

module.exports = GuineaPigs;

var MyComponentClass = React.createClass({
  render: function(){
    return <h1>Hello world</h1>;
  }
});

function MyComponentClass () {
  return <h1>Hello world</h1>;
}

ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

function Friend () {
  return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);

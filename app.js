var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

 var blog = (
<div>
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
  </article>
</div>
);

var myArticle = <article></article>;

var Pistons2004 = {
  center:        <li>Ben Wallace</li>,
  powerForward:  <li>Rasheed Wallace</li>,
  smallForward:  <li>Tayshaun Prince</li>,
  shootingGuard: <li>Richard Hamilton</li>,
  pointGuard:    <li>Chauncey Billups</li>
};

var p1 = <p id="large">foo</p>;

var p2 = <p id="small">bar</p>;

 var theGoogle = (
   <a href="https://www.google.net">
     <h1>
       Click me I am Gooooooooooogle
     </h1>
   </a>
 );
 
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

var myList = (
<ul>
  <li>1
  </li>
	<li>2
  </li>
	<li>3
  </li>
</ul>);

ReactDOM.render(
  myList, 
	document.getElementById('app')
);

var myDiv = ( 
<div className="big">I AM A BIG DIV NOW</div>);

ReactDOM.render(myDiv, document.getElementById('app'));

var profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

var pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);

var math = (
<h1>2+3={2+3}</h1>);

ReactDOM.render(math, document.getElementById('app'));

var React = require('react');
var ReactDOM = require('react-dom');

var theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

var gooseImg = <img src={goose} />;

ReactDOM.render(
  gooseImg,
  document.getElementById('app')
);

function makeDoggy (e) {
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

var kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
		onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));

 if (coinToss() == 'heads') {
   var img = (
     <img src={pics.kitty} />;
   );
} else {
var img = (
  <img src={pics.doggy} />;
);
}

function coinToss () {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

var judgmental = Math.random() < 0.5;

var favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person){
	 return <li>{person}</li>;
});
ReactDOM.render(<ul>{peopleLIs}</ul>,document.getElementById('app'));

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
	 return <li key={'person_' + i}>{person}</li>;
});

ReactDOM.render(<ul>{peopleLIs}</ul>,document.getElementById('app'));

var greatestDivEver = React.createElement(
"div",
null,
"i am div"
);

var React = require('react');
var ReactDOM = require('react-dom');

var QuoteMaker = React.createClass({
  render: function () {
    return (
<blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank" 
      href="http://bit.ly/1LvSLUA">
      Susan Sontag
    </a>
  </cite>
</blockquote>
    );
  }
});

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

var owl = {
  title: "Excellent Owl",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

var Owl = React.createClass({
render: function () {
    return (
      <div>
	<h1>{owl.title}</h1>
	<img 
		src={owl.src} 
    alt={owl.title} />
      </div>
    );
  }
});

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);

var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

var Friend = React.createClass({
render: function () {
	var friend = friends[1];
  return (
    <div>
			<h1>{friend.title}</h1>
			<img src={friend.src} />    
</div>
  );
}
});

var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

var Friend = React.createClass({
render: function () {
	var friend = friends[2];
  return (
    <div>
			<h1>{friend.title}</h1>
			<img src={friend.src} />    
</div>
  );
}
});

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonightsPlan = React.createClass({
  render: function () {

    if (fiftyFifty = true) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
});

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

var MyName = React.createClass({
	// name property goes here:
name: 'James',

  render: function () {
    return <h1>My name is {this.name}</h1>;
  }
});

ReactDOM.render(<MyName />, document.getElementById('app'));


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

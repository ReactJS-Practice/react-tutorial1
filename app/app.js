import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  render() {
    return (
      <h1> It works </h1>
    );
  }
}

const app = document.getElementById('content');
ReactDOM.render(<Layout/>, app);

/*import React from 'react';
import {render} from 'react-dom';

import {Header} from './component/Header';
import {Home} from './component/Home';

class App extends React.Component{
  constructor(){
  	super();
  	this.state = {
  		homeLink: "Home"
  	};
  }
  
  onGreet(){
  	alert("Hello!");
  }
  onChangeLinkName(newName){
  	this.setState({
  		homeLink: newName
  	});
  }
  render(){
    return (
      <div className="container">
      	<div className="row">
      		<div  className="col-xs-10 col-xs-offset-1">
      			<Header homeLink={this.state.homeLink}/>
      		</div>
      	</div>
      	<div className="row">
      		<div  className="col-xs-10 col-xs-offset-1">
      			<Home 
      			name={"Max"} 
      			initialAge={27} 
      			greet={this.onGreet}
      			changeLink={this.onChangeLinkName.bind(this)}/>
      		</div>
      	</div>
      </div>
    );
  }
}*/


/*import React from 'react'
import ReactDOM from 'react-dom'

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="CommentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);*/



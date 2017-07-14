import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
  
  constructor(){
  	super();
  	this.state = {title : 'Welcome'};
  }
  changeTitle(title){
  	this.setState({title:title}); //ES6 feature used 
  }
  render() {
    return (
    	<div>
    		<Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
    		<div>Body....</div>
    		<Footer/>
    	</div>
    );
  }
}
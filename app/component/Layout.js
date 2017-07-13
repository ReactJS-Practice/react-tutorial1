import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
  constructor(){
  	super();
  	this.state = {name: "Sambit"};
  }

  render() {
  	setTimeout(()=>{
  		this.setState({name: "Swarup"});
  	},1000)
    return (
    	<div>
    		{this.state.name}
    		<Header/>
    		<div>Body....</div>
    		<Footer/>
    	</div>
    );
  }
}
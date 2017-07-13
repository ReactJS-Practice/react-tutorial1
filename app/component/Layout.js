import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
  constructor(){
  	super();
  	this.state={
  		title:"Welcome"
  	};
  }
  render() {
  	const title =  "Welcome Sambit !";
  	/*setTimeout(()=>{
  		this.setState({title: "Welcome Swarup"});
  	}, 1000);*/
    return (
    	<div>
    		<Header name={"some testname1"} title={title} />
    		<Header name={"some testname2"} title={this.state.title} />
    		<div>Body....</div>
    		<Footer/>
    	</div>
    );
  }
}
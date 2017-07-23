import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import Result from './Result';

export default class Layout extends React.Component{
  //this.state = {counter:0};
  constructor(){
  	super();
  	this.state = {counter:0};
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  changeTitle(title){
  	this.setState({title:title}); //ES6 feature used 
  }
  incrementCounter(incrementvalue){
    var increasecount = this.state.counter+incrementvalue;
    this.setState({
      counter: increasecount
    })
  }
  render() {
    return (
    	<div>
    		<Header incrementvalue={1}  onClickFunction={this.incrementCounter}/>
        <Header incrementvalue={10} onClickFunction={this.incrementCounter}/>
        <Header incrementvalue={50} onClickFunction={this.incrementCounter}/>
        <Header incrementvalue={100} onClickFunction={this.incrementCounter}/>
    		<div>Body....
          <br></br>
          <Button></Button>
          <Result></Result>
        </div>
    		<Footer count={this.state.counter}/>
    	</div>
    );
  }
}
import React from 'react';
import axios from 'axios';

export default class Form extends React.Component{
	constructor(){
		super();
		this.state = {userName:''};
  		this.handleSubmit = (event) => {
			event.preventDefault();
			//console.log('Event: From Submit',this.userNameInput.value);
			console.log('Event: From Submit',this.state.userName);
			axios.get('https://api.github.com/users/'+this.state.userName)
				.then(
					resp=>{
						this.props.onSubmit(resp.data);
					}
				);
		};
	}
	
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.userName}
				    onChange={(event)=>this.setState({userName:event.target.value})}
					placeholder="Github username" 
					required/>
				<button type="submit">Add card</button>
			</form>
		);
	}
}
/*
<input type="text" ref={(input)=> this.userNameInput = input}
					placeholder="Github username" 
					required/>*/
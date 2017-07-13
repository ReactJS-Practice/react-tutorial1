import React from "react";


export class Home extends React.Component{

	constructor(props){
		super();
		this.age = props.age;
		this.state = {
			age : props.initialAge,
			status : 0,
			homeLink: 'changed link'
		}
	}

	onMakeOlder(){
		this.setState({
			age: this.state.age + 3
		})
	}

	onChangeLink(){
		this.props.changeLink(this.state.homeLink);
	}

	render(){
		var text = "Something";
		console.log(this.props);
		return (
			
			<div>
				<p>In a new Component</p>
				<p>Name: {this.props.name}</p>
				<p>Age: {this.state.age}</p>
				<p>status as: {this.state.status}</p>
				<hr/>
				<button onClick={()=> this.onMakeOlder()} className="btn btn-primary"> Make me older!</button>
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary"> Greet!</button>
				<hr/>
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary"> Change Header!</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	greet:React.PropTypes.func,
	changeLink: React.PropTypes.func
}

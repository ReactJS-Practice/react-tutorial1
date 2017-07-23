import React from 'react';

export default class Footer extends React.Component{
	render(){
		return (
			<footer>footer...{this.props.count}</footer>
		);
	}
}
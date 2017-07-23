import React from 'react';

import Title from './header/Title';

export default class Header extends React.Component{
	
//{()=>this.props.onClickFunction(this.props.incrementvalue)}
	constructor(){
		super();
		this.handleClick = ()=>this.props.onClickFunction(this.props.incrementvalue);
	}
	
	render(){
		return (
			<div>
				
				<button onClick={this.handleClick}>
				+{this.props.incrementvalue}
				</button>
			</div>
		);
	}
}


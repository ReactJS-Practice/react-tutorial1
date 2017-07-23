import React from 'react';

export default class Card extends React.Component{
	render() {
		return (
			<div style={{margin: '1em'}}>
				<img width="75" src={this.props.avatar_url} />
				<div style={{display:'inline-block', marginLeft:10}}>
					<div style={{fontSize:'1.25em', fontWeight:'bold'}}>{this.props.name}</div>
					<div>{this.props.company}</div>
				</div>
			</div>
		)
	}
};
/*export const Card = (props) => {
	return(
		<div>
			<img src="http://placehosd.it/75" />
			<div>
				<div>Name here...</div>
				<div>Company Name here...</div>
			</div>
		</div>
	);
};*/
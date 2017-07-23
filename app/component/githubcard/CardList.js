import React from 'react';

import Card from './Card';


export default class CardList extends React.Component{
	render() {
		return (
			<div style={{margin: '1em'}}>
				{this.props.cards.map(card => <Card key={card.id} {...card}/>)}
			</div>
		)
	}
};

/*
export default class CardList extends React.Component{
	render() {
		return (
			<div style={{margin: '1em'}}>
				<Card name="Paul O Shaneessy" 
					avatar_url="https://avatars0.githubusercontent.com/u/7?v=4"
					company="Facebook"/>
				<Card />
			</div>
		)
	}
};*/
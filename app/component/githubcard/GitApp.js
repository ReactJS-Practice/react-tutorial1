import React from 'react';

import CardList from './CardList';
import Form from './Form';

export default class GitApp extends React.Component{

	
    constructor(){
	  	super();
	  	this.state ={
						cards:[
							/*{name:"Paul O Shaneessy", avatar_url:"https://avatars0.githubusercontent.com/u/7?v=4", company:"Facebook"},
							{name:"Ben Alpert", avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4", company:"Facebook"}*/
							]
					};
	    this.addNewCard = (cardInfo) => {
	    	console.log(cardInfo);
	    	this.setState(prevState => ({
	    		cards: prevState.cards.concat(cardInfo)
	    	}));
	    };
    }

	render(){
		return (
			<div>
				<Form onSubmit={this.addNewCard}/>
				<CardList cards={this.state.cards}/>
			</div>
		);
	}
}
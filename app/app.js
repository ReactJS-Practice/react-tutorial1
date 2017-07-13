import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component{

  constructor(){
    super();
    this.title = "Mr. "
  }

  getLastName(){
    return " Mishra";
  }

  render() {
    const name = 'Sambit';
    return (
      <h1> It's {this.title} {name} {this.getLastName()}!</h1>
    );
  }
}

const app = document.getElementById('content');
ReactDOM.render(<Layout/>, app);
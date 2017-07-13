import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component{
  render() {
    const name = 'Sambit';
    return (
      <h1> It's {name}!</h1>
    );
  }
}

const app = document.getElementById('content');
ReactDOM.render(<Layout/>, app);
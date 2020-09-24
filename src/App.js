import React from 'react';
import './App.css';
import CardList from './components/Card';

class App extends React.Component {
  render(){
  return (
    <div>
    <div className="header">{this.props.title}</div>

      <CardList />
    </div>


  );
  }

}

export default App;

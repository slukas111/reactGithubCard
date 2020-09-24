import React from 'react';
import './App.css';
import { CardList,testData } from './components/Card';
import Form from './components/Form';
// import { testData } from './components/Card'

class App extends React.Component {
  render(){
  return (
    <div>
    <div className="header">{this.props.title}</div>
      <Form />
      <CardList profiles={testData}/>
    </div>


  );
  }

}

export default App;

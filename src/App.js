import React from 'react';
import './App.css';
import { CardList, testData } from './components/Card';
import Form from './components/Form';
// import { testData } from './components/Card'



class App extends React.Component {

  state = {
    profiles: testData,
  };

  addNewProfile = (profileData) => {
    console.log(App, profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <div className="form-submit">
        <Form onSubmit={this.addNewProfile}/>
        </div>
        <div className="card-content">
        <CardList profiles={this.state.profiles} />
        </div>
      </div>


    );
  }

}

export default App;

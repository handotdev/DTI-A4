import React, { Component } from 'react';
import './App.css';
import Emoji from './emoji'
import Doggo from './doggo'
import Pet from './pet'
import ContactCards from './contactcards'

class App extends Component {
  render() {

    const oneContactCard = {
      name: 'Sam',
      email: 'random-email@gmail.com'
    };
    const contactCardList = [oneContactCard, oneContactCard, oneContactCard];

    return (
      <div className="App">
        <Emoji></Emoji>
        <Doggo></Doggo>
        <Pet></Pet>
        <ContactCards data={contactCardList}></ContactCards>
      </div>
    );
  }
}

export default App;

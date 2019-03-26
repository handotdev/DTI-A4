import React, { Component } from 'react';
import './App.css';
import Emoji from './emoji.jsx'
import Doggo from './doggo.jsx'
import Pet from './pet.jsx'
import ContactCards from './contactcards.jsx'

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

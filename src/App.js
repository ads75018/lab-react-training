import React from 'react';
import logo from './logo.svg';
import IDCard from './IDCard/IDCard.js';
import Greetings from './greetings/Greetings.js';
import Random from './random/random.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <IDCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IDCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;

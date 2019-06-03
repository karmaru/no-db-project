import React from 'react';

import './App.css';
import Alarms from './components/Alarms'
import Header from './components/Header/Header'


function App() {

  return (
    <div className="App">
      <header >
      <Header />
      </header>
      
      <section style={{width: '80vw', border: '1px solid red', justifyContent: 'center'}}>
        <Alarms />
      </section>
      <footer style={{background: 'black', color: 'white', width: '100vw', height: '10vh', position: 'absolute', bottom: 0}}>
          <hr style={{margin: '20px',height: '10px', border: 0, boxShadow: '0 10px 10px -10px #8c8b8b inset'}}></hr>
          <h3>© 2019 KarmaWorks</h3>
      </footer>
      
    </div>
  );
}

export default App;

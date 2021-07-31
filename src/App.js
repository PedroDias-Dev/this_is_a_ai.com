import { useState } from 'react';

import './App.css';
import TypewriterLine from './utils/typewriter';
import Typewriter from 'typewriter-effect'

function App() {
  const [hidden, setHidden] = useState(true)
  const [firstTime, setFirstTime] = useState(null)

  function firstTimeF(event){
    event.preventDefault();
    document.getElementById('hide_input').readOnly = true;

    if(firstTime == 'Y'){
      setFirstTime(true)
    } 
    else if(firstTime == 'n'){
      setFirstTime(false)
    } 
    else{

    }
  }

  return (
    <div className="App">
      <h5>Angela AI PowerShell</h5>
      <h5>Copyright (C) Avesa CORP - All rights reserved</h5>

      <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('>> Hello World! :) ✨ <br>>> My name is Angela, your favorite AI! <br>>> Is this your first time here? ')
                .callFunction(() => {
                  setHidden(false)
                })
                .pauseFor(2500)
                .start();
            }}
            options={{
                delay: 50
            }}
      />

      {/* // first answer */}
      {!hidden && 
        <form onSubmit={e => firstTimeF(e)}>
          <input id="hide_input" placeholder="( Y/n )" onChange={event => setFirstTime(event.target.value)} />
        </form>
      }

      {
        firstTime === true &&
          <Typewriter
              onInit={(typewriter) => {
              typewriter.typeString('>> Oh, i see. So what is your name? ')
                  .callFunction(() => {
                    setHidden(false)
                  })
                  .pauseFor(2500)
                  .start();
              }}
              options={{
                  delay: 50
              }}
          />
      }
      

    </div>
  );
}

export default App;

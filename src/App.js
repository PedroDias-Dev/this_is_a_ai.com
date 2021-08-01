import { useState } from 'react';

import './App.css';
import TypewriterLine from './utils/typewriter';
import Typewriter from 'typewriter-effect'

function App() {
  const [hidden, setHidden] = useState(true)
  const [hidden2, setHidden2] = useState(true)

  const [firstTime, setFirstTime] = useState(null)
  const [name, setName] = useState('')

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

  function nameSet(){

  }

  return (
    <div>
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
            <input id="hide_input" placeholder="-> ( Y/n )" onChange={event => setFirstTime(event.target.value)} />
          </form>
        }

        {
          firstTime === true &&
            <div>
              <Typewriter
                  onInit={(typewriter) => {
                  typewriter.typeString('>> Oh, i see. So what is your name? ')
                      .callFunction(() => {
                        setHidden2(false)
                      })
                      .pauseFor(2500)
                      .start();
                  }}
                  options={{
                      delay: 50
                  }}
              />

              {!hidden2 && 
                <form onSubmit={e => nameSet(e)}>
                  <input id="hide_input" placeholder="->" onChange={event => setName(event.target.value)} />
                </form>
              }

            </div>
        }
        

      </div>
      <div className="main-input">
        <form>
          {/* <h5>$</h5> */}
          <input placeholder="->"/>
        </form>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

import '../../App.css';
import '../main/styles.css'
import TypewriterLine from '../../utils/typewriter';
import Typewriter from 'typewriter-effect'
import { Loading } from '../../components/loading';

import {connect} from 'react-redux'

function Main({loading}){
  console.log(loading)
  
  return(
    <div>
      {loading ? <Terminal /> : <Loading />}
    </div>
  )
}

function Terminal() {
  const [hidden, setHidden] = useState(true)
  const [hidden2, setHidden2] = useState(true)

  const [random, setRandom] = useState('')
  const [command, setCommand] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    generateUID()
  }, [])

  function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);

    setRandom(firstPart + secondPart);
  }

  function execCommand(event){
      event.preventDefault();

      console.log('ssssssssssss')
      if(command === "riddle"){
        return(
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
        )
      }
      else{
        return(
          <Typewriter
              onInit={(typewriter) => {
              typewriter.typeString('>> Command ' + command + ' not found ')
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
        )
      }
  }

  return (
    <div>
      <div className="App">
        <Loading />
        <h5>Angela AI PowerShell</h5>
        <h5>Copyright (C) Avesa CORP - All rights reserved</h5>

          <form onSubmit={e => execCommand(e)} >
            <div style={{display: 'flex'}}>
              <h5>local{random} $</h5>
              <input id="hide_input" onChange={event => setCommand(event.target.value)} />
              
            </div>

          </form>

      </div>
    </div>
  );
}

export default connect(state => ({progress: state.progress}))(Main);

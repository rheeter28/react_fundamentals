import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Effects = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h2>Below are some inportant points regarding effects:</h2>
        <ul>
          <li>They are triggered with state and prop updates, as well as after initial renter to the DOM.</li>
          <li>Effects are used to trigger certain actions based upon changed to the component</li>
          <li>Effects can return cleanup functions, which can clean up timers using ememory, listeners to outside APIs, and other functions which may use system resources.</li>
        </ul>
        <SampleEffect />
        <br />
        <SampleEffect />
      </div>
    </div>
  )
}


export default Effects;

const SampleEffect = () => {
  const [ timerRunning, setTimerRunning] = useState(false);

useEffect(() =>{
  console.log('we initiated a state change')
})

  useEffect(() =>{
    let timer;
    if(timerRunning){
      timer = window.setTimeout(()=>{
        console.log('the timer expired', Date.now()/1000);
        setTimerRunning(false);
      }, 2000);
    }
    return () => { window.clearTimeout(timer); console.log("the timer was cleaned up", Date.now()/1000)}
  })

  useEffect(() => {
    console.log('This painting nees some happy trees');

  },[])
  
  let buttonHandler = () => {
    if (!timerRunning){
      setTimerRunning(true);
    }
  }
  return (
    <div style={{border: '1px dashed black'}}>
      <h2>This component demoes an effect</h2>
      <Button onClick={ buttonHandler }>Click me to start and effect in the console</Button>
    </div>
  )
  }

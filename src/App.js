import React, { useState } from 'react'
import Switch from './components/Switch'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false)
  return (
    <div className="App">
      <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <span>Test Switch</span>
        <br/>
        <span>value is {isOn ? 'on' : 'off'}</span>
        <br/>
        <Switch isOn={isOn} handleToggle={setIsOn} id='some_id'/>
      </div>
    </div>
  )
}

export default App

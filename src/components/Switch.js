import React from 'react'
import './Switch.css'

const Switch = ({ isOn, handleToggle, id }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={() => handleToggle(!isOn)}
        className="react-switch-checkbox"
        id={`react-switch-new-${id}`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new-${id}`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}

export default Switch
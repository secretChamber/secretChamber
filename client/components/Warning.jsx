import React from 'react'

export default class Warning extends React.Component {
  render() {
    return (
      <span style={{color: "red", textAlign: "center"}}>If this is a police, fire, medical, or other emergency, please call 911 immediately.</span>
    ) //need to add in red color to span
  }
}
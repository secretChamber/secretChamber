import React from 'react'

export default class Warning extends React.Component {
  render() {
    return (
      <div>
	      <span style={{color: "red", textAlign: "center"}}>If this is a police, fire, medical, or other emergency, please call 911 immediately.</span>
	      <div className="space"></div>
      </div>
    ) 
  }
}
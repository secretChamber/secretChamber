import React from 'react'

class Places extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const issueList = this.props.markers.map((pin, i) => {
      return(
        <li key={i}>
          <div>Issue - {pin.issue}</div>
          <div>Reporter - {pin.reporter}</div>
        </li>
      )
    })
    return (
      <div>
        Issues
        <ol>
          {issueList}
        </ol>
      </div>
    )
  }
}

export default Places
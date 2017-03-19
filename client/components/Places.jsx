import React from 'react'

class Places extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const issueList = this.props.markers.map((pin, i) => {
      return(
        <li key={i}>
          <div>Issue - {pin.type}</div>
          <div>Reporter - {pin.reporter}</div>
        </li>
      )
    })
    return (
      <div className="issues">
        Issues
        <ol>
          {issueList}
        </ol>
      </div>
    )
  }
}

export default Places
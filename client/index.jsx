import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Maps.jsx'
import Places from './components/Places.jsx'

class App extends React.Component {
  render() {
    const location = {
      lat: 37.78425,
      lng: -122.42935
    }
    const zoom = 12;
    return (
      <div>
        <div style={{width: 700, height: 400, background:"red"}}>
          <Map center={location} zoom={zoom}/>
        </div>
        <Places />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
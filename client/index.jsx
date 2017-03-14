import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Maps.jsx'
import Places from './components/Places.jsx'

class App extends React.Component {
  render() {
    const location = {
      lat: 37.787792,
      lng: -122.400063
    }
    const zoom = 18;
    return (
      <div>
        <div style={{width: 700, height: 400}}>
          <Map center={location} zoom={zoom}/>
        </div>
        <Places />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
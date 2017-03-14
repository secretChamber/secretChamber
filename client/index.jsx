import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Maps.jsx';
import Places from './components/Places.jsx';
import Navigation from './components/Nav.jsx';

class App extends React.Component {
  render() {
    const location = {
      lat: 37.78425,
      lng: -122.42935
    }
    const zoom = 12;
    return (
      <div>
      <Navigation />
        <div>
          <div style={{width: 700, height: 400}}>
            <Map center={location} zoom={zoom}/>
          </div>
          <Places />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Maps.jsx';
import Places from './components/Places.jsx';
import Navigation from './components/Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    //the state should be populated by a 'get' from DB
    this.state = {
      pins: [
        {
          issue: 'Trash',
          location: {
            lat: 37.7875074,
            lng: -122.4020266
          },
          status: 'Reported',
          reporter: 'Matt'
        },
        {
          issue: 'Roadwork',
          location: {
            lat: 37.7894111,
            lng: -122.4032613
          },
          status: 'Reported',
          reporter: 'Jaime'
        },
        {
          issue: 'Traffic Sign',
          location: {
            lat: 37.7883543,
            lng: -122.4097812
          },
          status: 'Reported',
          reporter: 'Max'
        }
      ]
    }
  }
  render() {
    const location = {
      lat: 37.78725,
      lng: -122.402935
    }
    const zoom = 14;

    return (
      <div>
        <Navigation />
        <div>
          <div style={{width: 700, height: 400}}>
            <Map center={location} zoom={zoom} markers={this.state.pins}/>
          </div>
          <Places />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
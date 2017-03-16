import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Maps.jsx';
import Places from './components/Places.jsx';
import Navigation from './components/Nav.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    //the state should be populated by a 'get' from DB
    this.state = {
      pins: []
    }
    this.getIssues = this.getIssues.bind(this);
    this.getIssues();
  }
  getIssues() {
    axios.get('/issue')
      .then(({ data }) => {
        this.setState({
          pins: data
        })
      })
      .catch(err => {
        console.error('Get Issues Failed.')
      });
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
          <Places markers={this.state.pins}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*
mysql> insert into reported_issues (user_id, lat, lng, type, status) values (1, 37.7894111, -122.4032613, 'Trash', 'Reported');
Query OK, 1 row affected (0.01 sec)

mysql> insert into reported_issues (user_id, lat, lng, type, status) values (2, 37.7875074, -122.4020266, 'Roadwork', 'Reported');
Query OK, 1 row affected (0.00 sec)

mysql> insert into reported_issues (user_id, lat, lng, type, status) values (3, 37.7883543, -122.4097812, 'Traffic Sign', 'Reported');
Query OK, 1 row affected (0.00 sec)
*/
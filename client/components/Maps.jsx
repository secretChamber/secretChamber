import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from 'react-google-maps';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pinCtr: 0,
      allPins: [
      ]
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.dropPin = this.dropPin.bind(this);
  }
  onMarkerClick (e) {
    this.setState({
      infoWindowShow: true
    });
  }

  dropPin (e) {
    this.props.submit();
    const pins = [];
    const pinPosition = {
      name: this.props.name,
      issue: this.props.issue,
      position: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      },
      description: this.props.description
    }
    const allPins = this.state.allPins.slice();
    allPins.push(<Marker key={this.state.pinCtr} {...pinPosition} />)
    this.setState({allPins: allPins});
    let count = this.state.pinCtr + 1;
    this.setState({pinCtr: count});

    var newPin = this.state.allPins[this.state.allPins.length - 1];
    var row = {
      type: newPin.props.issue,
      reporter: newPin.props.name,
      location: {
        lat: newPin.props.position.lat,
        lng: newPin.props.position.lng
      },
      description: newPin.props.description
    }
    this.props.postIssues(row);
    this.props.clearFields();
  }

  render () {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

    const markers = this.props.markers.map((pin, i) => {
      const marker = {
        position: {
          lat: parseFloat(pin.location.lat),
          lng: parseFloat(pin.location.lng)
        }
      }
      return <Marker key={i} {...marker} onClick={this.onMarkerClick}>
        <InfoWindow content={''+'Issue: '+pin.type+'\n'+'Reporter: '+pin.reporter}/>
      </Marker>
    })
    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            onClick={this.dropPin}
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            options={{streetViewControl:false, mapTypeControl:false}}>
            { markers }
            {this.state.allPins}
          </GoogleMap>
        }/>
    )
  }
}
export default Map

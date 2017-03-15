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
    this.closeInfo = this.closeInfo.bind(this);
    this.dropPin = this.dropPin.bind(this);
  }
  onMarkerClick (e) {
    console.log(this.state.infoWindowShow);
    this.setState({
      infoWindowShow: true
    });
    console.log(this.state.infoWindowShow);
  }
  closeInfo (e) {
    console.log('Hello');
  }

  dropPin (e) {
    const pins = [];
    const pinPosition = {
      position: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    }
    const allPins = this.state.allPins.slice();
    allPins.push(<Marker key={this.state.pinCtr} {...pinPosition} />)
    this.setState({allPins: allPins});
    let count = this.state.pinCtr + 1;
    this.setState({pinCtr: count});

    // console.log(ctr);
  }

  render () {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

    const markers = this.props.markers.map((pin, i) => {
      const marker = {
        position: {
          lat: pin.location.lat,
          lng: pin.location.lng
        }
      }
      return <Marker key={i} {...marker} onClick={this.onMarkerClick}>
        <InfoWindow onCloseClick={this.closeInfo} content={pin.reporter}/>
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
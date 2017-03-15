import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow} from 'react-google-maps';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      infoWindowShow: false
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
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
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            options={{streetViewControl:false, mapTypeControl:false}}>
            { markers }
          </GoogleMap>
        }/>
    )
  }
}
export default Map
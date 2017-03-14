import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
  render () {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>

    const markers = this.props.markers.map((pin, i) => {
      const marker = {
        position: {
          lat: pin.location.lat,
          lng: pin.location.lng
        }
      }
      return <Marker key={i} {...marker} />
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
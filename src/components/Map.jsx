import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap({ lat, lng, _onClick }) {
  const [zoom, setZoom] = useState(5)

  return (
    <div style={{ height: '75vh', width: '90%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{
          lat: lat,
          lng: lng
        }}
        defaultZoom={zoom}
        // options={this.createMapOptions()}
        onClick={_onClick}
      >
        {/* <AnyReactComponent
          lat={lat}
          lng={lng}
          text={'DISINI'}
        /> */}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap;
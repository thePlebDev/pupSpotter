import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';


const MapContainer= ()=>{
const [state,setState] = useState({lat:37.7749,lng:-122.4194,zoom:13})

  useEffect(()=>{

  },[])
  return(
    <Map
      center={[state.lat,state.lng]}
      zoom={state.zoom}
      style={{width:'100%',height:'500px',marginTop:'100px'}}
    >
    <TileLayer
      attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </Map>
  )
}

export default MapContainer

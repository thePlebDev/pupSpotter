import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';


const MapContainer= ()=>{
const [state] = useState({lat:45.897820,lng:-64.368279,zoom:13})

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
      <Marker position={[state.lat,state.lng]} >
        <Popup>
          <div>Dog Here</div>
        </Popup>
      </Marker>

    </Map>
  )
}

export default MapContainer

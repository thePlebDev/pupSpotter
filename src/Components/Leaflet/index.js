import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import axios from 'axios'


const MapContainer= ()=>{
const [state] = useState({lat:45.897820,lng:-64.368279,zoom:13})
const [mapData,setMapData] = useState('')
console.log(mapData)


  useEffect(()=>{
    // make a get request to get all of the spotting
    axios.get('http://localhost:3001/spot/all')
    .then(data=>setMapData(data.data))
    .catch(err=>console.log(err))

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
      {
        mapData
          ?
        mapData.map((item,index)=>{
        return(
          <Marker position={[item.location.lat,item.location.lon]} >
            <Popup>
              <div>{item.name}</div>
            </Popup>
          </Marker>
        )
      })
      :
      ''
    }
      <Marker position={[state.lat,state.lng]} >
        <Popup>
          <div>Dog Here</div>
        </Popup>
      </Marker>

    </Map>
  )
}

export default MapContainer

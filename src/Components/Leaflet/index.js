import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import axios from 'axios'

import Filter from '../Filter'
import {backendUrl} from '../../utils/Constants'
import {axiosGet} from '../../utils/AxiosFuncs'

const MapContainer= (props)=>{
const [state] = useState({lat:45.897820,lng:-64.368279,zoom:13})

const [mapData,setMapData] = useState('');
console.log(mapData)

useEffect(()=>{
   axiosGet(`${backendUrl}isAuthenticated`)
   .then(data=>{
     if(data.status ===200){
       props.setLoggedIn(true)
     }
   })
   .catch(error=>{console.error('there is an error------> ' + error)})
},[])

  useEffect(()=>{
    // make a get request to get all of the spotting
    axiosGet('http://localhost:3001/spot/all')
    .then(data=>{
      console.log(data.response)
      setMapData(data.response)})
    .catch(err=>console.log(err))

  },[])
  return(
    <div>
          <Filter setMapData={setMapData}/>
        <Map
          center={[state.lat,state.lng]}
          zoom={state.zoom}
          style={{width:'70%',height:'100vh',margin:'0 auto'}}
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
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <div>Tim</div>
                </div>
            </Popup>

          </Marker>

        </Map>

    </div>
  )
}

export default MapContainer

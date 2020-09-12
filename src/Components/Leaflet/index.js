import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import axios from 'axios'
import {backendUrl} from '../../utils/Constants'

const MapContainer= ({setLoggedIn})=>{
const [state] = useState({lat:45.897820,lng:-64.368279,zoom:13})

const [mapData,setMapData] = useState('');
console.log(mapData)


useEffect(()=>{
  axios.get(`${backendUrl}isAuthenticated`,{withCredentials:true})
  .then(data=>{
    if(data.data.status === 200){
      setLoggedIn(true)
    }})
  .catch(e=>console.error('error------> ' + e))
},[])

  useEffect(()=>{
    // make a get request to get all of the spotting
    axios.get('http://localhost:3001/spot/all')
    .then(data=>{
      console.log(data.data)
      setMapData(data.data)})
    .catch(err=>console.log(err))

  },[])
  return(
    <div>

        <Map
          center={[state.lat,state.lng]}
          zoom={state.zoom}
          style={{width:'70%',height:'90vh',margin:'0 auto'}}
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
                  <img  src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" style={{width:'90px',height:'90px',borderRadius:'30%'}} alt='puppy'></img>
                  <div style={{marginTop:'15px',alignSelf:'flex-end'}}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                  <button>Give treat</button>
                </div>
            </Popup>

          </Marker>

        </Map>

    </div>
  )
}

export default MapContainer

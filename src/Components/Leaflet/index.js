import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import axios from 'axios'






const MapContainer= ()=>{
const [state] = useState({lat:45.897820,lng:-64.368279,zoom:13})
const [loading, setLoading] = useState(false);
const [mapData,setMapData] = useState('');
console.log(mapData)


  useEffect(()=>{
    // make a get request to get all of the spotting
    axios.get('http://localhost:3001/spot/all')
    .then(data=>{
      console.log(data.data)
      setMapData(data.data)})
    .catch(err=>console.log(err))
    function changing(){
      setLoading(false)
    }

    setTimeout(changing,3000)

  },[])
  return(
    <div>
    
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
              <div>Dog Here</div>
            </Popup>
          </Marker>

        </Map>

    </div>
  )
}

export default MapContainer

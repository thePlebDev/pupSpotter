import React,{useEffect,useState} from 'react';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components'

import Filter from '../Filter'
import About from '../About'
import LeafletPopup from '../LeafletComponent'
import {backendUrl} from '../../utils/Constants'
import {axiosGet} from '../../utils/AxiosFuncs'
import useLeaftletHook from '../../Hooks/LeafletComponent'

const Title = styled.h2`
border-bottom:2px solid #3f51b5;
width:100%;
text-align:center;
`
const Content = styled.div`
  font-size:1.2em;
`
const Heart = styled.div`
  color:${props=>props.clicked? 'red': '#c3c3c3'};
`


const MapContainer= (props)=>{
const [state] = useState({lat:45.897820,lng:-64.368279,zoom:13})

const [mapData,setMapData] = useState('');


//THIS IS CAUSING THE NOT FOUND BUG
//this function when we get rerouted from the login page
useEffect(()=>{
    axiosGet(`${backendUrl}hello/auth`)
    .then(data=>{
      if(data.status ===200){
        console.log('logged it')
        props.setLoggedIn(true)
      }else{
        console.log(data)
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
    <div className="page">
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
              <Marker position={[item.location.lat,item.location.lon]} key={item._id}>
                <Popup>
                  <LeafletPopup id={item._id} name={item.name} description={item.description} hook={useLeaftletHook} />
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
                  <Title>Tim</Title>
                  <Content>He was a very bueno boy with a red coat and a golden leash</Content>
                  <Heart>
                    <FavoriteIcon style={{cursor:'pointer',borderRadius:'50%',position:'absolute',left:'10px',top:'5px'}}/>
                  </Heart>
                </div>
            </Popup>

          </Marker>
          <About modalShow={props.modalShow} setModalShow={props.setModalShow}/>
        </Map>

    </div>
  )
}

export default MapContainer

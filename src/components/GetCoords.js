import React, {useState} from 'react';
import { Circle, Popup, Marker, useMapEvents } from 'react-leaflet';
import Marks from './Marks';
import axios from 'axios'
import Stats from './Stats';
import './Markers.css';


const GetCoords = () => {
    const [coords, setCoords] = useState([0, 0])
    const [crimes, setCrimes] = useState([])
    
    
    const MapEvents = () => {
        useMapEvents({
          click(e) {
            
            setCoords([e.latlng.lat, e.latlng.lng])
            
            console.log(coords)
        
          },
          
        
        });
        
     }

    const request = async () => {

        const params = { lat: coords[0], lng: coords[1] }

        const callApi = axios.create({
            baseURL: 'https://ukpolicedata.p.rapidapi.com',
            params: params,
            headers: {
              'X-RapidAPI-Key': 'c838eb78camsh91d46c9d96dac27p192e90jsnc7f5490ea021',
              'X-RapidAPI-Host': 'ukpolicedata.p.rapidapi.com'
            }
        
            
          });
          
          
          // console.log(this.state.message, this.state.count, ' times')
          const response = callApi.get('/crimes-street/all-crime');
          setCrimes((await response).data)
          
          console.log(crimes)
          
          
        
        
      

    }


    return ( <div>
        
        <MapEvents>
           
        </MapEvents>
        <Circle 
            className="hoverme" 
            center={coords} 
            pathOptions={{ 
                fillColor: '#ffffff50',
                color: 'red', 
                backgroundColor: 'darkgrey' }} 
            radius={1600}
            eventHandlers={{
                mouseover: (event) => event.target.openPopup(),
                
                
              }}
            
            >
           
            <Popup className="popup showme">
                <div> Total crimes: {crimes.length}</div>
                <Stats crimes={crimes}/>
                
                <button className="scan"  onClick={request}>[SCAN HERE]</button>
                
            
            </Popup>
            
        </Circle>

        
        <Marks crimes={crimes}/>
        
        </div>
    )

}

export default GetCoords;
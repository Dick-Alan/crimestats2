import React, {useState} from 'react';
import { Circle, Popup, useMapEvents } from 'react-leaflet';
import Marks from './Marks';
import axios from 'axios'
import Stats from './Stats';


import './Markers.css';



const GetCoords = () => {
    const [coords, setCoords] = useState([0, 0])
    const [crimes, setCrimes] = useState([])
    const [scanned, setScanned] = useState(true)
    
    
    const MapEvents = () => {
        
        useMapEvents({
          click(e) {
            
            
            setCoords([e.latlng.lat, e.latlng.lng]) 
       
            setScanned(false)
            
            
            console.log(coords)
            
          },
          
        
        });
        
          
        
     }
    

    const request = async () => {

        

        const callApi  = axios.create({
            baseURL: 'https://ukpolicedata.p.rapidapi.com',
            params: { lat: coords[0], lng: coords[1]},
            headers: {
              'X-RapidAPI-Key': 'c838eb78camsh91d46c9d96dac27p192e90jsnc7f5490ea021',
              'X-RapidAPI-Host': 'ukpolicedata.p.rapidapi.com'
            }
        
            
          });
          
          
          // console.log(this.state.message, this.state.count, ' times')
          const response = callApi.get('/crimes-street/all-crime');
          setCrimes((await response).data)
          setScanned(true)
          console.log(crimes)  

    }

    const ShowStats = () => {
        if (scanned === true) {
            return (
                <div className="stats">
                    <div style={{color: 'white'}}> Total crimes: {crimes.length}</div>
                    <Stats crimes={crimes}/>
                

                </div>
            )
        }
        else {
            return <div></div>
        }
    }
    const ShowMarks = () => {
        if (scanned === true) {
            return (
                <Marks crimes={crimes}/>

            )
        }
        else { return null}
    }

    const ScanButton = () => {
        if (scanned === false ) {
            return (
                <Popup className="popup showme">
                
            
                
                <button className="scan"  onClick={request}> SCAN </button>
                
                
            
            </Popup>


            )
        }
        else {
            return null
        }
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
            <ScanButton></ScanButton>
            
            
            
        </Circle>
        <ShowStats></ShowStats>
        <ShowMarks></ShowMarks>
       
        
        
        
        
        </div>
    )

}

export default GetCoords;
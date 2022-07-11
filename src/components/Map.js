
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import SearchBar from './searchbar';

import GetCoords from './GetCoords';
import axios from 'axios';



const Map = (props)=> {
    

    const [view, setView] = useState(props.viewposition)
    const [moving, setMoving] = useState(false)
    
    
    const onSearchSubmit = async (term) => {

        


        setMoving(true)
       

            const callApi  = axios.create({
                baseURL: 'https://api.geoapify.com/v1/geocode/search',
                params: {apiKey: '519a81ae8a974952a09169ad20fc1183', text: term},
                headers: {

                  
                }
                
            
                
              });
              
              

              const response = callApi.get();
              console.log('sent')
              console.log((await response).data.features[0].geometry.coordinates)
              setView({ lat : (await response).data.features[0].geometry.coordinates[1],
                 lng: (await response).data.features[0].geometry.coordinates[0]})
              console.log((await response).error)
              console.log('recieved')
            

        
        

     
       
               
        };
        function GoToPoint() {
            const map = useMapEvent('keydown',() => {
                if (moving === true) {
                   
                    map.setView(view, 15)
                    console.log(props.viewposition)
                    setMoving(!moving)
                    



                }
               
              })
              
        }
    
        return(
            <div className="master">
            
          
            <MapContainer id="map"
                                    style={{ width: '95vw', height: '90vh', theme: 'dark'}}
                                    center={props.viewposition} 
                                    zoom={6}
                                    zoomControl={false}
                                    
                                    
                                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        />
                        
                        <GetCoords/>
                        <GoToPoint> </GoToPoint>
                        
                            <SearchBar onSubmit={onSearchSubmit}>
                              
                            </SearchBar>
                        
                        
            </MapContainer>
            </div>
    
        )


    
    
    
}

export default Map;
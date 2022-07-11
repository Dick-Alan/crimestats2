
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import SearchBar from './searchbar';
import data from './data.json';
import GetCoords from './GetCoords';



const Map = (props)=> {
    

    const [view, setView] = useState(props.viewposition)
    const [moving, setMoving] = useState(false)
    
    
    const onSearchSubmit = (term) => {
        const dest = []
        setMoving(true)
        data.map((e) => {
            if (term.toLowerCase() === e.city.toLowerCase()) {
                dest.push(e.city, e.lat, e.lng)
                setView([e.lat, e.lng])
                console.log(`moved to ${dest[0]} ${dest[1]} ${dest[2]}`)
                
                
               
               
            }
         
        });
        
        

     
       
               
        };
        function GoToPoint() {
            const map = useMapEvent('keydown',() => {
                if (moving === true) {
                    map.setView(view, 12)
                    console.log(props.viewposition)
                    setMoving(!moving)
                    



                }
               
              })
              
        }
    
        return(
            <div className="master">
            
          
            <MapContainer id="map"
                                    style={{ width: '95vw', height: '95vh', theme: 'dark'}}
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
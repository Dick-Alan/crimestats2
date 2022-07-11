import React from 'react';
import { Marker, Popup, Circle } from 'react-leaflet';
import './Markers.css'


const Marks = (props) => {
    


   
    const crimes = props.crimes.map((crime) => {
         var color = '#ffffff30'
         var status = 'not provided'
        if (crime.category === 'violent-crime') {
            color = 'red'
        }
        if (crime.category === 'anti-social-behaviour') {
            color = 'purple'
        }
        if (crime.category === 'drugs') {
            color = 'greenyellow'
        }
        if (crime.category === 'theft' || crime.category === 'theft-from-the-person' || crime.category === 'bicicyle-theft' || crime.category === 'other-theft') {
            color = 'orange'
         }
         if (crime.category === 'robbery') {
            color = 'magenta'
        }
        if (crime.category === 'burglary') {
            color = 'pink'
        }
        if (crime.category === 'possession-of-weapons') {
            color = 'cyan'
        }
        if (crime.category === 'criminal-damage-arson') {
            color = 'brown'
        }
        if (crime.category === 'vehicle-crime') {
            color = 'pink'
        }
        if (crime.outcome_status !== null) {
            status = crime.outcome_status.category
        }
        
        
        return (
            <Circle 
            key={crime.id} 
            center={[crime.location.latitude, crime.location.longitude]}
            pathOptions={ {
            fillColor: color,
            color: color,
            backgroundColor: color
        } } radius={25}
        eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
           
            
          }}
        
            >
                <Circle
                center={[crime.location.latitude, crime.location.longitude]}
                pathOptions={ {
                fillColor: 'black',
                color: 'black',
                backgroundColor: 'black'
            } } radius={5}
                
                
                ></Circle>
                <Popup className="popup">
                        Category: {crime.category} <br />
                        Month: {crime.month} <br />
                        Latitude: {crime.location.latitude} <br />
                        Longitude: {crime.location.longitude} <br />
                        Status: {status}
                        
                </Popup>
            </Circle>
            
        )
    })
    return (
        <div>
            {crimes}
      
        </div>
    )

}


export default Marks;
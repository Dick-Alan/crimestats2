import React from 'react';
import {  MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import GetCoords from './GetCoords';

class App extends React.Component {
    state = {count: 0, crimes: [], lat: 51.5072, lng: -0.1275, coords: [0, 0], data: 'data' }

    render() {
        
        return (
            <div>
                
                <MapContainer id="map"
                             style={{ width: '95vw', height: '95vh', theme: 'dark'}}
                              center={[this.state.lat, this.state.lng]} 
                              zoom={13}
                              
                             >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                <GetCoords/>
                </MapContainer>
                
            </div>

        )
    }
}

export default App;
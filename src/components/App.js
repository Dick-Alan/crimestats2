
import React from 'react';
import Map from './Map';
import './Markers.css'



class App extends React.Component {
    state =  {viewposition: [52.5072, -1.1275] }
    render() {
          
        return (
            <div style={{backgroundColor: 'black'}}>
           
                <h2 style={{color: 'greenyellow', fontFamily: 'monospace'}}> UK CRIME DATA SCANNER</h2>
                <Map showgraph={this.state.showGraph} showlegend={this.state.showLegend} viewposition={this.state.viewposition}></Map>
               
                <div className="resources"> Resources:
                    <br></br>
                   <a href="https://react-leaflet.js.org/"> https://react-leaflet.js.org/ </a>
                   <br></br>
                   <a href="https://rapidapi.com/lewisyouldon/api/uk-police-open-data/details"> https://rapidapi.com/lewisyouldon/api/uk-police-open-data/details </a>
                   <br></br>
                   <a href="https://github.com/Dick-Alan/crimestats2">https://github.com/Dick-Alan/crimestats2</a>
                </div>
             
                

            </div>

        )
    }
}

export default App;
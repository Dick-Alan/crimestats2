
import React from 'react';
import Map from './Map';
import './Markers.css'


class App extends React.Component {
    state =  {viewposition: [52.5072, -1.1275], city: '', showGraph: true, showLegend: true }
    render() {
          
        return (
            <div>
                <h2 style={{color: 'black'}}> UK CRIME DATA SCANNER</h2>
                <Map showgraph={this.state.showGraph} showlegend={this.state.showLegend} viewposition={this.state.viewposition}></Map>
                <h6 className="resources"> Resources:
                    <br></br>
                   <a href="https://react-leaflet.js.org/"> https://react-leaflet.js.org/ </a>
                   <br></br>
                   <a href="https://rapidapi.com/lewisyouldon/api/uk-police-open-data/details"> https://rapidapi.com/lewisyouldon/api/uk-police-open-data/details </a>
                   <br></br>
                   <a href="https://github.com/Dick-Alan/crimestats2">https://github.com/Dick-Alan/crimestats2</a>
                </h6>
                

            </div>

        )
    }
}

export default App;

import React from 'react';
import Map from './Map';


class App extends React.Component {
    state =  {viewposition: [52.5072, -1.1275], city: '', showGraph: true, showLegend: true }
    render() {
          
        return (
            <div>
               
                <Map showgraph={this.state.showGraph} showlegend={this.state.showLegend} viewposition={this.state.viewposition}></Map>

            </div>

        )
    }
}

export default App;
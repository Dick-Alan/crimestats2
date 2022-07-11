
import React, {setState} from 'react';
import Map from './Map';
import Stats from './Stats';

class App extends React.Component {
    state =  {viewposition: [52.5072, -1.1275], city: '', showGraph: true, showLegend: true }
    render() {
          
        return (
            <div>
               
                <Map showgraph={this.state.showGraph} showlegend={this.state.showLegend} viewposition={this.state.viewposition}></Map>
                {/* <button > Show Graph </button> <button > Show Legend </button>
                 */}
            </div>

        )
    }
}

export default App;
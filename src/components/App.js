
import React from 'react';
import Map from './Map';

class App extends React.Component {
    state =  {viewposition: [52.5072, -1.1275], city: 'london' }
    render() {
          
        return (
            <div>
                
                <Map viewposition={this.state.viewposition}></Map>
                
            </div>

        )
    }
}

export default App;
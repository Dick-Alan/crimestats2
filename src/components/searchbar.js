import React from 'react';
import './Markers.css'


class SearchBar extends React.Component {

    state = {term: ''};
    onFormSubmit = event => {
        event.preventDefault();
        

        this.props.onSubmit(this.state.term);
    }
    render () {
        
        return (
            <div className="search">
                   
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label > Lookup Region: </label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}>
                        </input>
                        
                    </div>
                </form>
                
            </div>
                
            );
    }

};

export default SearchBar;
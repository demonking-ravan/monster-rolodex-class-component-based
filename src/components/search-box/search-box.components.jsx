import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
    render() { 
        return (
            <div>
                <input 
                className={`search-box ${this.props.className}`}
                type='search' 
                onChange={this.props.onChangeHandler} 
                placeholder={this.props.placeholder}
                />

            </div>
        )
    }
}

export default SearchBox;
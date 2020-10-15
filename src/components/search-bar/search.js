import React from 'react';
import './search.css';

function search(props) {
    return (
        <section>
            <input 
                type="text"
                placeholder="search for a movie ..."
                className="search-box"
                onChange={props.handleInput}
                onKeyPress={props.keyPress}
            />
        </section>
    );
}

export default search;
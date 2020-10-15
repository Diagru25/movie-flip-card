import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './main.css';

function FlipCard(props) {

    const [state, setState] = useState({});

    const apiURL = "http://www.omdbapi.com/?apikey=9a1e0f3c";

    const getByID = id => {
        axios(apiURL + "&i=" + id)
            .then(({data}) => {
                setState(data)
            })
    }

    return (
        <div className="card">
            <div className="card__inner" onClick={() => getByID(props.result.imdbID)}>
                <div className="card__face card__face--front">
                    <img src={props.result.Poster} alt="" />
                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <img src={state.Poster} alt="" className="pp" />
                            <h2>{state.Title}</h2>
                        </div>
                        <div className="card__body">
                            <h3>Produce: {state.Year}</h3>
                            <span>Rating: {state.imdbRating} </span>
                            <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt=""/>
                            <p>{state.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
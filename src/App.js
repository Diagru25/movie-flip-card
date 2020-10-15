import React, { useState } from 'react';
import Search from './components/search-bar/search';
import ListCard from './components/listCard/listCard';

import axios from 'axios';

function App() {

  const [state, setState] = useState({
    query: "",
    results: []
  });

  const apiURL = "http://www.omdbapi.com/?apikey=9a1e0f3c";


  const handleInput = (e) => {
    let s = e.target.value;

    setState({ ...state, query: s });

    console.log(state);
  }

  const keyPress = (e) => {

    if (e.key === "Enter") {
      axios(apiURL + "&s=" + state.query)
        .then(({data}) => {
          setState({ ...state, results: data.Search })
          console.log(data.Search)
        })
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Test flip card</h1>
      </header>
      <main>
        <Search handleInput={handleInput} keyPress={keyPress} />
        <ListCard results={state.results}/>
      </main>
    </div>
  );
}

export default App;

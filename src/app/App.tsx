import React from 'react';

import 'normalize.css'; // Note this

// import { Provider } from 'react-redux';
// import { store } from './App.store';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HomePage } from '../features/home/HomePage';
import { AudioPlayground } from '../components/Audio';

function App() {
  return (
    <AudioPlayground/>
    /*<Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path="" element={ <HomePage/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>*/
  );
}

export default App;

import React from 'react';

import 'normalize.css';

import { Provider } from 'react-redux';
import { store } from './App.store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AudioPlayground } from '../components/Audio';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Routes>
          <Route path="/" element={ <AudioPlayground/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

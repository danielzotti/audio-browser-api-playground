import React from 'react';

import 'normalize.css'; // Note this

import { Provider } from 'react-redux';
import { CounterPage } from '../features/counter/CounterPage';
import { store } from './App.store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../features/home/HomePage';
import { Header } from '../components/Header';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="counter" element={ <CounterPage/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

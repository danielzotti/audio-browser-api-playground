import React from 'react';

import 'normalize.css';

import { Provider } from 'react-redux';
import { store } from './App.store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../features/home/HomePage';
import { Header } from '../components/Header';
import { CounterPage } from '../features/counter/CounterPage';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
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

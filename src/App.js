import React from 'react';
import routers from '././routers';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {routers}
    </div>
  );
}

export default App;

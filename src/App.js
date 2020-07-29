import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Callback from './Callback';
import Home from './Home';


function App() {

  return (
    <div className="App" >
      <Route exact path='/' component={Home} />
      <Route exact path='/callback' component={Callback} />
    </div>
  )
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Department from './components/Department';
import Employee from './components/Employee';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <Switch>
       <Route path='/' component={Home} exact />
       <Route path='/department' component={Department} />exact />
       <Route path='/employee' component={Employee} />exact />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

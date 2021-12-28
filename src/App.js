import React from 'react'
import "./App.css"
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <AddContact />
          </Route>
          <Route path="/edit/:id">
            <EditContact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

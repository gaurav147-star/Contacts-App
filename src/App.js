import React, { useState } from 'react'
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
import Alert from './components/Alert';

const App = () => {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }


  return (
    <Router>
      <div className='App'>
        <ToastContainer />
        <Navbar toggleMode={toggleMode} />
        <Alert alert={alert} />
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

// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  //useEffect to handle and store the token of the user
  useEffect(() => {
  let token; 
  //if ther is no token inide localStorage, then the user is not authenticated
  /// Now grab token with getItem at the localStorage
  if(!localStorage.getItem('jwtToken')){
    console.log('is not authenticated')
    setIsAuthenticated(false)
  }else {
   token =jwt_decode(localStorage.getItem('jwtToken'));
   console.log('token', token)
   setAuthToken(token) 
   setCurrentUser(token);
  }
  }, []);

  const nowCurrentUser = userData => {
    console.log('----- inside nowCurrentUser -----')
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  // Now let'ss create a logout
  const handleLogout = () => {
    // determine if thereis ajwt
    /// if there is a token, then rmove it launch a logout
    if (localStorage.getItem('jwtToten')) {
      localStorage.removeItem('jwtToken')
      //now set the user to null
      setCurrentUser(null);
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
      {/* <Navbar  /> */}
      
      <Footer />
    </div>
  );
}

export default App;

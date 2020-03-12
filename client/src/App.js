// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import LogginSpace from './components/LogginSpace/LogginSpace';
import SigninSpace from './components/SigninSpace/SigninSpace';
import Feed from './components/Feed/Feed';
import { ThemeProvider } from "styled-components";
import variables from "./variables";
import UserProfile from './components/User_Profile/UserProfile';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={{...variables}}>
          <Route exact path="/" component={LogginSpace}></Route>
          <Route exact path="/subscription" component={SigninSpace}></Route>
          <Route exact path="/feed" component={Feed}></Route>
          <Route exact path="/user_profile" component={UserProfile} />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

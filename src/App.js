import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GuestsNavBar from "./components/GuestNavBar/guestsNavBar";
import Widget from "./components/widget/Widget";
import AllGuests from "./NavTabs/allguests";
import TopAndSideBAr from "./topandside";
import {app} from "./utils/config";
import React, { useEffect } from 'react';
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";


function App() {
  useEffect(() => {
    console.log(app);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route exact path="home" element={<TopAndSideBAr />} >
            <Route path="/home" element={<Navigate to="dashboard" />} />
            <Route exact path="dashboard" element={<Widget />} />
            <Route path="guests" element ={<GuestsNavBar/>} >
              <Route path="allguests" element={<AllGuests/>} />
              <Route path="pending"  />
              <Route path="booked"  />
              <Route path="departed" />
            </Route>
            <Route path="menu" />
            <Route path="contact"/>
        </Route>
        <Route path='signup' element={<SignUp />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

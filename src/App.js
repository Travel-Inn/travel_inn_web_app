import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestsNavBar from "./components/GuestNavBar/guestsNavBar";
import Widget from "./components/widget/Widget";
import AllGuests from "./NavTabs/allguests";
import TopAndSideBAr from "./topandside";
import {app} from "./utils/config";
import React, { useEffect } from 'react';
import SignUp from "./components/auth/signup";


function App() {
  useEffect(() => {
    console.log(app);
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="begin" element={<TopAndSideBAr />} >
            <Route path="home" element={<Widget />} />
            <Route path="guests" element ={<GuestsNavBar/>} >
              <Route path="allguests" element={<AllGuests/>} />
              <Route path="pending"  />
              <Route path="booked"  />
              <Route path="departed" />
            </Route>
            <Route path="menu" element ={<TopAndSideBAr />} />
            <Route path="contact" element ={<TopAndSideBAr />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

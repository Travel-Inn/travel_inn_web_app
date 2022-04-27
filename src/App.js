import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestsNavBar from "./components/GuestNavBar/guestsNavBar";
import Widget from "./components/widget/Widget";
import AllGuests from "./NavTabs/allguests";
import TopAndSideBAr from "./topandside";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopAndSideBAr />} >
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

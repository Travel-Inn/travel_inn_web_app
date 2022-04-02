import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Facilities from './pages/facilities';
import Contact from './pages/contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="booking" element={<Home />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

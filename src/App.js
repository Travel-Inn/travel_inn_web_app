import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact';
import Header from './components/header';
import Menu from './pages/menu';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} >
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="booking" element ={<Home />} />
        <Route path="menu" element ={<Menu />} />
        <Route path="contact" element ={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

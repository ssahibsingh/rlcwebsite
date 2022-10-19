import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import {About, Contact, Events, Home, Literature, Team} from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event" element={<Events />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/magazine" element={<Magazine />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

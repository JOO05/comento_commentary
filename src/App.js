import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{textAlign:"center"}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
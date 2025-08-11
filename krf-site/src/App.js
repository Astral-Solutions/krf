// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Donate from './pages/Donate.jsx';
import Programmes from './pages/Programmes.jsx';
import Impact from './pages/Impact.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Layout from './components/Layout.jsx';
import Milestones from './pages/Milestones.jsx';
import Leadership from './pages/Leadership.jsx';
import Registration from './pages/Registration.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

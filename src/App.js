import './App.scss';
import { HashRouter, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <HashRouter>
      <Route path="/PersonalWebsite" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/PersonalWebsite/about" element={<About />} />
        <Route path="/PersonalWebsite/contact" element={<Contact />} />
        <Route path='/PersonalWebsite/portfolio' element={<Portfolio />} />
      </Route>
    </HashRouter>
    </>
    
  );
}

export default App;

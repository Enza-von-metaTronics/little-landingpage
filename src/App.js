import './App.css';
import {Routes , Route} from 'react-router-dom';
import { PageHome } from './components/PageHome';
import {PageAbout} from './components/PageAbout';
import {PageReports} from './components/PageReports';
import {Nav} from './components/Nav';
import {Info} from './components/Info';
import Impressum from './components/Impressum';


function App() {
  return (
    <div className="App">


      <div className='introBox'>
      <img src="../logo.png" className="App-logo" alt="logo" />
		    <h1 className='font-effect-neon'>Enzas Little Landingpage</h1></div>
        <Nav />
      <div className='page'>
      <Routes>
        <Route path="/" element={<PageHome />}/> 
        <Route path="/about" element={<PageAbout />}/> 
        <Route path="/reports" element={<PageReports />}/>             
        <Route path="/info" element={<Info />}/>
        <Route path="/impressum" element={<Impressum />}/>
      </Routes>

      </div>

    </div>
  );
}

export default App;
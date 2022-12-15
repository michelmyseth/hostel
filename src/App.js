import React from 'react'; 
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import {Routes, Route} from "react-router-dom";
import BainJaponais from './components/bain/BainJaponais';
import LaMaison from './components/la_maison/LaMaison'
import Soin from './components/soin/Soin';

function App() {
  return (
    <div className="App" >
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <Navbar/> 
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/la_maison" element={<LaMaison/>}/>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;

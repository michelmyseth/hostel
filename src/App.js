import React from 'react'; 
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <p>test</p>
      <Navbar/> 
      <Route  path="/" component={Main} />
      <Footer/>
      </div>
    </Router>
  );
}

export default App;

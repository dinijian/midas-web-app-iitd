import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';

import Login from './components/Login';
import 'animate.css';
import 'styled-components';

import {BrowserRouter, Switch} from 'react-router-dom';



const Routing = ()=>{
  return (
    <>    
  <Switch>
  
      <> 
      <div className='flexbox-container'>
      <Slideshow />
      <Login />
      </div>      
     
</>
  </Switch>

            </>
            
  )
}
function App() {
  
  return (
    
    <BrowserRouter>
      <Navbar />
      
      <Routing />
    </BrowserRouter>
    
  );
}
export default App;


 import './slideshow.css';
import people1 from './Images/people1.jpg';

import React, { Component } from 'react';

 class Slideshow extends Component {

  render() {
    return(
      <div >
<div className='people'>
                <img className='slide' src={people1} alt="people" />
                

            </div>

            
      </div>
            

    
    )
  }

}
export default Slideshow;
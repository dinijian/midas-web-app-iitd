import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './Images/midas_logo.jpg';

import Search from './Search';
function Navbar(){
    const [click,setClick]=useState(false);
    const [dropdown,setDropdown]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    return (
        <>
        <div className='container1'>
        <nav className='navbar' >
        <img src={logo} height="50" width="50" alt="Logo" /> 
            <Link to='/' className='navbar-logo'>
            MIDAS IIITD
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul  className={click ? 'nav-menu active' : 'nav-menu'  } >
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home <i className='fas fa-caret-down'/>
                    </Link>
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    <Link to='/pages' className='nav-links' onClick={closeMobileMenu}>
                       Pages <i className='fas fa-caret-down'/>
                       {dropdown && <Dropdown />}
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                       Services <i className='fas fa-caret-down'/>
                    </Link>
                    
                </li>

                <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                       Blog <i className='fas fa-caret-down'/>
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                       Contacts 
                    </Link>
                    
                </li>
                <li >
               
<Search />

</li>      

            </ul>
          
        </nav>
        </div>
      
        
        </>
        
        
    );

}
export default Navbar;
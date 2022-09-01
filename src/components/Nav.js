import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/reports'>Reports</NavLink></li>
            <li><NavLink to='/about'>about me</NavLink></li>
            <li><NavLink to='/info'>Info</NavLink></li>
            <li><NavLink to='/impressum'>Impressum | Imprint</NavLink></li>
        </ul>
    </nav>
  )
}


import React from 'react';
import { useUser } from 'reactfire';
import  '../css/NavBara.css';
import Login from './login';
import LogOut from './logOut';

 export default function NavBar() {
   const user = useUser();
     return(
     <nav id="nav1" className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div id="div2" className="navbar-brand" >
          <a href="index.html">Muro interactivo</a>
        </div>
        <div>
        {
            !user.data &&
            <Login/>
          }
          {
            user.data &&
            <p>Usuario: {user.data.email} <LogOut/> </p>
          }
      </div>
      </div>
     </nav>
     )
 }
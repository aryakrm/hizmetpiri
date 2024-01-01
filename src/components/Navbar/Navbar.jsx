import React from 'react'
import "./Navbar.scss"
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";

function Navbar() {
  return (
    <nav className='Navbar' >
      <img src="/assets/hp2.png" alt="Hizmet Piri Logo" />
      <ul className='nav-links' >
        <li>
        <FaHome /> Anasayfa
        </li>
        <li className='nav-btn' >
        <MdPersonAdd /> Üye Ol
        </li>
        <li className='nav-btn' >
        <FaSignInAlt /> Giriş Yap
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

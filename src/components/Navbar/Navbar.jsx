import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { LuClipboardEdit } from 'react-icons/lu'

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to={'/'}>
        <img src='/assets/hp2.png' alt='Hizmet Piri Logo' />
      </Link>

      <ul className='nav-links'>
        <li>
          <Link to={'/'}>
            <FaHome /> Anasayfa
          </Link>
        </li>
        <li>
          <Link to={'/create-task'}>
            <LuClipboardEdit /> Hizmet Al
          </Link>
        </li>
        <li className='nav-btn'>
          <MdPersonAdd /> Üye Ol
        </li>
        <li className='nav-btn'>
          <FaSignInAlt /> Giriş Yap
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

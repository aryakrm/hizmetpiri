import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { LuClipboardEdit } from 'react-icons/lu'
import {
  getAuth,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from 'firebase/auth'

function Navbar() {
  const [authUser, setAuthUser] = useState(null)

  const auth = getAuth()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else setAuthUser(null)
    })
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe()
  }, [auth])

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  return (
    <nav className='Navbar'>
      <Link to={'/'}>
        <img src='/assets/hp3.png' alt='Hizmet Piri Logo' />
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
        <li>
          <Link to={'/create-task'}>
            <LuClipboardEdit /> Hizmet Ver
          </Link>
        </li>
        {!authUser && (
          <li className='nav-btn'>
            <Link to={'/signup'}>
              {' '}
              <MdPersonAdd /> Üye Ol{' '}
            </Link>
          </li>
        )}

        {!authUser && (
          <li className='nav-btn'>
            <Link to={'/signin'}>
              {' '}
              <FaSignInAlt /> Giriş Yap{' '}
            </Link>
          </li>
        )}

        {authUser && <p style={{ color: '#d4af37' }}>{authUser.email}</p>}
        {authUser && (
          <li className='nav-btn' onClick={signOut}>
            Çıkış
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar

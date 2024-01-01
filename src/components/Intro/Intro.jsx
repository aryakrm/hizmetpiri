import React from 'react'
import "./Intro.scss"
import { FaSearch } from "react-icons/fa";

function Intro() {
  return (
    <section className='Intro' >
      <div className="intro-left">
        <h1>DOĞRU HİZMETİ, HİZMET PİRİ İLE HEMEN BULUN...</h1>
        <div className='intro-search'>
        <input type="text" />
        <button type='button' ><FaSearch /></button>
        </div>
      </div>
      <div className="intro-right">
        <img src="/assets/hpVector2.png" alt="Hizmet Piri Vector" />
      </div>
    </section>
  )
}


export default Intro

import React from 'react'
import  './Hero.css'
import Crypto from '../assets/hero-img.png'

function Hero() {
  return (
    <div>

<div className='hero'>
  <div className='container'>
    <div className='left'>
      <p>Buy & Sell Crypto 24/7 using Free Cash Account</p>
      <h1>Invest in all Stable Cytocurrencies </h1>
      <p>Over a million coins available to buy and sell</p>
      <div className='input-container'>
        <input type='email' placeholder='Enter email' />
        <button className='btn'>Learn More</button>
      </div>
    </div>
<div className = "right">
<div className='img-container'>
  <img src={Crypto} alt = '/'/>

</div>
</div>
  </div>

</div>


    </div>
  )
}

export default Hero
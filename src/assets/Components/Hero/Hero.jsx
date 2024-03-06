import React from 'react'
import "./Hero.css"

const Hero = ({img,title,subtitle,btn}) => {
  return (
    <div className='hero'>
        <img src={img}  /> 
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button>{btn}</button>
        
    </div>
  )
}

export default Hero
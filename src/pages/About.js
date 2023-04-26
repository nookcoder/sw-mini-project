import React from 'react'
import '../styles/About.css';
import test from '../somacritic.png'

const About = () => {
  return (
    <div className='About'>
      
      <header className='Header'>
        <nav className='Bar'>
          <nav id='PrimaryLogo'>
            <a className='logo'>
              <img src={test} width='50' height='50'/>
            </a>
            <a className='logoWord'>
              SomaCritic
            </a>
          </nav>
        
          
          
        </nav>
      </header>
    </div>
  )
}

export default About

import React from 'react'
import '../styles/About.css';

const About = () => {
  return (
    <div className='About'>
      
      <header className='Header'>
        
      </header>
      <div className='MainContent'>
        <div className='Content'>
          <img src='img/somacritic.png'  id='mainImg'></img>
          <div className='substance'>
            <div className='Title'>
              <text className='TitleName'>React</text>
              <img src='img/somacritic.png'></img>
              <text>4.68</text>

            </div>

            <div className='Summary'>
                This package provides a wrapper around Dart implementations of SVG parsing, including SVG path data. In particular, it provides efficient BytesLoader implementations for package:vector_graphics. This package is easier to use but not as performant as using the vector_graphics and vector_graphics_compiler packages directly. Those packages allow you to do ahead-of-time compilation and optimization of SVGs, and offer some more performant rasterization strategies at runtime. 
            </div>
          </div>

          
          


        </div>
        



      </div>
    </div>
  )
}

export default About

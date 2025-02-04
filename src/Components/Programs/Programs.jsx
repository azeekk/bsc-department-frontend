import React from 'react'
import './programs.css'
import IGEN from '../../assets/igen232.mp4'

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='programheader'>PROGRAMS</h1>
      <div className='section'>
        <div className='top'>
                  <div className='video1'>
                    <video src={IGEN} width="500" height="200" autoPlay muted loop controls="false" ></video>
                  </div>

        </div>
        <div className='bottom'>
        <p className='program_paragraph'>The BSc Department focuses on scientific knowledge, research, and practical applications in various fields such as Physics, Chemistry, Mathematics, Computer Science, Biology, and Environmental Science. It provides students with analytical, technical, and problem-solving skills necessary for careers in research, technology, and industry.</p>
          
        </div>
      </div>    
    </div>
  )
}

export default Programs

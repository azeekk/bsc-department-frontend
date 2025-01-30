import React from 'react'
import './programs.css'
import video from '../../assets/video.mp4'

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='programheader'>PROGRAMS</h1>
      <div className='section'>
        <div className='top'>
                  <div className='video1'>
                    <video src={video} width="500" height="400" autoPlay muted loop controls="false" ></video>
                  </div>

        </div>
        <div className='bottom'>
        <h4 className='program_heading'>Programs</h4>
        <p className='program_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
           cumque accusantium iusto vero aut delectus consectetur itaque dolorum quae
            iste nostrum quod, distinctio magnam! Nulla quod ullam cupiditate quasi nostrum.</p>
          
        </div>
      </div>    
    </div>
  )
}

export default Programs

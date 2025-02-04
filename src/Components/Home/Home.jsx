import React from 'react'
import "./Home.css"
import Logo from '../../assets/jamia_logo.png'
import video from '../../assets/video.mp4'

const Home = () => {
  return (
    <div className='spotlight'>

      <header className='header'>
        <div className='left'>
          <div className='img'>
            <img src={Logo} alt="logo"className='image' />
          </div>
          <div className='headercolor'>
            <h3 className='heading'>JAMIA ARTS <br></br> AND<br></br> SCIENCE COLLEGE</h3>
            </div>
        </div>
        <div className='right'>
          <div className='Navigation'>
            <ul className='ul'>
              <li className='homeli'>Home</li>
              <li className='teachersli'>Teachers</li>
              <li className='programsli'>Programs</li>
              <li className='aboutli'>About</li>
            </ul>
          </div>
        </div>
      </header>
      <div className='spotlight'> 

      <div className='middle'>
        <h1 className='bca'>DEPARTMENT<br></br> OF<br></br> BSC</h1>
      </div>

      <div className='video'>
          <video src={video} width="600" height="300" autoPlay muted loop controls="false" target="video" ></video>
        </div>


      </div>




    </div>
  )
} 

export default Home

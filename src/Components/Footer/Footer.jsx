import React from 'react'
import './Footer.css';
import Nav from '../../Component/Nav'
import Frame from '../../assets/Frame.png'
import Frame2 from '../../assets/Frame2.png'
import LocationLogo from '../../assets/location.png'
import PhoneLogo from '../../assets/phone.png'
import MailLogo from '../../assets/mail.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='header'> <Nav /></div>  
        <h1 className='thank'><img src={Frame2} alt="" />'Thank you for visiting us'<img src={Frame} alt="" /></h1>
        <div className='quicksupport'>
          <h4>Quick.Support</h4>
          <h2>you can get all the information</h2>
        </div>

        <div className='contacts'> 
          <li className='location'>
              <img src={LocationLogo} alt="" />
              <h5>visit us</h5>
              <h6>jamia nadawiyya</h6>
              <h6>edavanna</h6>

          </li>

          <li className='phone'>
            <img src={PhoneLogo} alt="" />
            <h5>call us</h5>
            <h6>0000000000</h6>
            <h6>0000000000</h6>

          </li>

          <li className='email'>
            <img src={MailLogo} alt="" />
            <h5>Email us</h5>
            <h6><a href="">example@gmail.com</a></h6>
            <h6><a href="">example@gmail.com</a></h6>
            
          </li>
        </div>
    </div>
  )
}

export default Footer

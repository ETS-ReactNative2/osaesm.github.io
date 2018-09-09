import React, { Component } from 'react'
import Routes from './Routes';
import './Website.css';

class Website extends Component {
  render() {
    const email = 'osamabinesmail@gmail.com'
    const phoneNumber = '(847) 834-1796'
    const mailingAddress = '410 E Green St, Apt 514, Champaign, IL 61820'
    return (
      <div>
        <div className='body'>
          <Routes />
        </div>
        <div className='footer'>
          <div className='first-line'>
            <strong>Email: </strong><a href={`mailto:${email}`}>{email}</a>
            <strong> | Phone: </strong><a href='tel:+18478341796'>{phoneNumber}</a>
            <strong> | Mailing Address: </strong><a href='https://goo.gl/maps/9orw4vZDeFx' target='_blank' rel="noopener noreferrer" >{mailingAddress}</a>
          </div>
          <div className='second-line'>
            <strong>LinkedIn: </strong><a href={'https://www.linkedin.com/in/osamabinesmail/'} target='_blank' rel="noopener noreferrer" >/in/osamabinesmail</a>
            <strong> | GitHub: </strong><a href={'http://github.com/osaesm'} target='_blank' rel="noopener noreferrer" >/osaesm</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Website;

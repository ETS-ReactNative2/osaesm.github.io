import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Routes.css'
import Home from './Home'
import ContactMe from './ContactMe'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='nav-bar'>
            <button className='link'>
              <Link to='/'>Home</Link>
            </button>
            <button className='link'>
              <a target='_blank' without rel="noopener noreferrer" href='https://docs.google.com/viewer?url=https://github.com/osaesm/osaesm.github.io/raw/master/Resume.pdf'>Resume</a>
            </button>
            <button className='link'>
              <Link to='/contact-me'>Contact Me</Link>
            </button>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/contact-me' component={ContactMe} />
        </div>
      </Router>
    );
  }
}

export default Routes;

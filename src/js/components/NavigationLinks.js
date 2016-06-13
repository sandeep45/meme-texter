import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

const NavigationLinks = (props) => {
  const {deleteHandler} = props;

  return(
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">SMS on Meme's</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/all_phone_numbers">All Phone Numbers</Link> </li>
            <li> <Link to="/paginated_phone_numbers">Paginated Phone Numbers</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavigationLinks.propTypes = { };

export default NavigationLinks


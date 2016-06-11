import appCss from '../../css/app.css'

import React from 'react';

import NavigationLinks from '../components/NavigationLinks.js'

const App = (props) => {
  return(
    <div>
      <NavigationLinks />
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  )
}

export default App


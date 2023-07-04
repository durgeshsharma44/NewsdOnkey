import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
export class navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsDonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/genral">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default navbar

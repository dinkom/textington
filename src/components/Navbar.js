import React, { PropTypes } from 'react'
import { addingTextCard, goToDefaultDisplay } from '../actions/index'

const Navbar = (props) => {
  const { store } = props

  const navigateToHome = () => {
    store.dispatch(goToDefaultDisplay())
  }

  const navigateToAdd = () => {
    store.dispatch(addingTextCard())
  }

  return (
    <div>
      <nav className="navbar navbar-default default-back">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-left">
            <li><button onClick={navigateToHome}>Home</button></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><button onClick={navigateToAdd}>Add</button></li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
  )
}

Navbar.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Navbar

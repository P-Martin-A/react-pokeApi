import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/layouts/header.scss'
import logo from '../assets/images/pokeball.png'

import Navigation from '../components/Navigation'


const Header = ({propsRouterHeader}) => (
  <header className="header">
    <Link className="header_logo"
      to="/"
    >
      <img className="header_logo-image"
        src={logo} alt="Pokeball" 
        />
      <h1 className="header_logo-title">PokeApi</h1>
    </Link>
    <Navigation 
      propsRouterNavigation={propsRouterHeader}
    />
  </header>
)

export default Header
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/components/navigation.scss'
import menu from '../assets/images/menu.svg'
import close from '../assets/images/close.svg'

const Navigation = ({propsRouterNavigation}) => {
  const LINKS = [
    {
      id: 1,
      nameItem: 'Home',
      path: '/'
    },
    {
      id: 2,
      nameItem: 'About',
      path: '/about'
    },
    {
      id: 3,
      nameItem: 'Contact',
      path: '/contact'
    },
  ]

  let [ icon, setIcon ] = useState(menu)

  const { pathname } = propsRouterNavigation.location

  return (
    <nav className="navigation">
      <div className="navigation_menu">
        <button className="navigation_menu-button" 
          onClick={() => toggleIcon(icon, setIcon)}
        >
          <img className="navigation_menu-button-icon" 
            src={icon} 
            alt="Icon" 
          />  
        </button>
      </div>
      <ul id="list" className="navigation_list">
        {LINKS.map(({ id, nameItem, path }) => (
          <li className="navigation_list-item"
            key={id}
          >
            <Link className={pathname === path ? 'navigation_list-item-link active' : 'navigation_list-item-link'}
              to={path}
            >{nameItem}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )

  function toggleIcon(icon, setIcon) {
    const $LIST = document.getElementById('list'),
          VALIDATION_TOGGLE_ICON = icon === menu ? close : menu
  
    setIcon(VALIDATION_TOGGLE_ICON)
  
    $LIST.classList.toggle('active')
  }
}


export default Navigation
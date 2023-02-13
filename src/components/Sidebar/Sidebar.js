import React from 'react'
import routes from '../../routes'
import './sidebar.css'
import {BsBorderAll, BsHeart, BsStar, BsGear} from 'react-icons/bs'
import {BiUserCircle, BiExit} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
        <ul className='nav-link-items'>
                        <li className='nav-link-item nav-link-active'>
                            <BsBorderAll className='nav-link-icon' />
                        </li>
                        <li className='nav-link-item'>
                            <BsHeart className='nav-link-icon' />
                        </li>
                        <li className='nav-link-item'>
                            <BsStar className='nav-link-icon' />
                        </li>
                        <li className='nav-link-item'>
                            <BiUserCircle className='nav-link-icon' />
                        </li>
                        <li className='nav-link-item'>
                            <BsGear className='nav-link-icon' />
                        </li>
        </ul>
                        <span className='nav-link-item'>
                            <BiExit className='nav-link-icon' />
                        </span>
    </div>
  )
}

export default Sidebar
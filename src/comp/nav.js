import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"
import {Link} from 'react-router-dom';
import LoginForm from '../login/components/LoginForm'

import './nav.css'
const Nav = ({search, setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
    <div className='header'>
        <div className='mid_header'>
          <div className='logo'>
            <img src='image/logo.webp' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><AiOutlineSearch /></button>
          </div>
          {
            isAuthenticated ? 
            // if user is login then Logout Button will shown and also user profile         
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          :
          // if user is not Login then login button will shown
          <div className='user'>
    <div className='icon'>
      <FiLogIn />
    </div>
    <div className='btn'>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  </div>
          }
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
              // User Profile Will Shown Here
              isAuthenticated ?
              <>
              <div className='icon'>
                <CiUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              
              </>
            }
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/cart' className='link'>Cart</Link></li>
              
            </ul>
          </div>
          
        </div>
    </div>
    </>
  )
}

export default Nav
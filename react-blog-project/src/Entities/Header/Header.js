import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <Navbar
  alignLinks="right"
  brand={<h2>Bit Blog</h2>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <Link to='/'><NavItem >
    Home
  </NavItem></Link>
  <Link to='/Posts'><NavItem >
    Posts
  </NavItem></Link>
  <Link to='/Authors'><NavItem >
    Authors
  </NavItem></Link>
  <Link to='/About'><NavItem >
    About
  </NavItem></Link>
</Navbar>
    )
}
export default Header
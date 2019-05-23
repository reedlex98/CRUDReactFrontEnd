import './Nav.css'
import React from 'react'
import NavItem from './Nav-item'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem hash="" icon="home" name="Home"/>
            <NavItem hash="users" icon="users" name="Users"/>
        </nav>
    </aside>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import React from 'react'

export default props => <div className="app">
    <Logo/>
    <Nav/>
    <Main icon="home" title="Inicio"
        subtitle="Second project, React Course" />
    <Footer/>   
</div>
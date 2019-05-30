import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import React from 'react'
import { HashRouter } from 'react-router-dom' // Nesse caso, podem ser usados tanto o BrowserRouter quanto o HashRouter. Entretanto, o BrowserRouter pode vir a dar alguns problemas após o deploy

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes/>
            <Footer />
        </div>
    </HashRouter>
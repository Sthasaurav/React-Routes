import React from 'react'
import Header from './components/Footer/Footer'
import Footer from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Footer />
            <Outlet />
            <Header />
        </>
    )
}

export default Layout

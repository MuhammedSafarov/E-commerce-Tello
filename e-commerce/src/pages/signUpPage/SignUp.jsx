import React from 'react'
import Footer from '../homePage/components/Footer'
import Navbar from '../homePage/components/Navbar'
import NavigationMenu from '../homePage/components/NavigationMenu'
import SignUpContent from './components/SignUpContent'

const SignUp = () => {
    return (
        <div >
            <Navbar/>
            <NavigationMenu/>
            <SignUpContent/>
            <Footer/>
        </div>
    )
}

export default SignUp

import React from 'react'
import HomeDec from '../components/home/HomeDec'
import HomePrd from '../components/home/HomePrd'
import HomeExplore from '../components/home/HomeExplore'
import HomeBenefits from '../components/home/HomeBenefits'
import HomePrdRange from '../components/home/HomePrdRange'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'

const Home = () => {
    return (
        <>
            <HomeDec />
            <HomePrd />
            <HomeExplore />
            <HomeBenefits />
            <HomePrdRange />
        </>
    )
}

export default Home

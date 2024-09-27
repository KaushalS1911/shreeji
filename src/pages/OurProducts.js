import React from 'react'
import OurPrdDec from '../components/OurProducts/OurPrdDec'
import OurPrdItems from '../components/OurProducts/OurPrdItems'
import OurPrdRange from '../components/OurProducts/OurPrdRange'
import OurPrdFarming from '../components/OurProducts/OurPrdFarming'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'

const OurProducts = () => {
    return (
        <>
            <OurPrdDec />
            <OurPrdItems />
            <OurPrdRange />
            <OurPrdFarming />
        </>
    )
}

export default OurProducts

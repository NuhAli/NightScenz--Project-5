import React from 'react'
import "../../App.css"
import {Herosection} from "../Herosection/Herosection"
import {Newsletter} from "../Newsletter/Newsletter"
import {Footer} from "../Footer/Footer"

// Home Page
const Home = (props) => {
    return (
        <>
            <Herosection />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home

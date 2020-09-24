import React from "react"
import Cards from "../Cards/Cards.jsx"
import {Newsletter} from "../Newsletter/Newsletter"
import {Footer} from "../Footer/Footer"

// Photo Gallery page
const Gallery = (props) => {
    return (
        <>
            <Cards addItem={props.addItem} deleteItem={props.deleteItem} />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Gallery

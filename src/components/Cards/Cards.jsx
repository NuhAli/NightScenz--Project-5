import React from 'react'
import Carditem from '../Carditem/Carditem';
import "./Cards.css"
import Gallerydata from "../Gallerydata/Gallerydata"
const Cards = (props) => {

    const cardList = Gallerydata.map(item=> {
        return (
            <Carditem
                key={item.id}
                id={item.id}
                cost={item.price}
                src= {item.src}
                text={item.text}
                label={item.label}
                addToCart={props.addItem}
                deleteFromCart={props.deleteItem}
            >
            </Carditem>
        )
    })

    return (
        <div className="cards">
            <h1> Purchase my collection of galleries! </h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        {cardList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

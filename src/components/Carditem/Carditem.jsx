import React, {useState} from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {IoMdRemoveCircle} from 'react-icons/io'
const Carditem = (props) => {

// State Area
    const [selected,setSelected] = useState(false)
// State Area End

    const currentItem = {
        key: props.id,
        text: props.text,
        label:props.label,
        price: props.cost
    }

    const storedState = localStorage.getItem(`state${props.id}`)
    
    return (
        <>
            <li className="cards-item">
            <div className="cards-item-link" to={props.path}>
                <figure
                    className="cards-item-pic-wrap" 
                    data-category={props.label}
                >
                    <img 
                        src={props.src} 
                        alt={props.label} 
                        className="cards-item-img"
                    />
                    {
                        storedState ? <IoMdRemoveCircle id="cards-item-remove" onClick={()=>{
                            localStorage.removeItem("selectedItem")
                            localStorage.removeItem(`state${props.id}`)
                            setSelected(false)
                            props.deleteFromCart(currentItem)
                        }} />
                        : <FaCartPlus id="cards-item-addcart" onClick={()=>{
                            localStorage.setItem("selectedItem",JSON.stringify(currentItem))
                            setSelected(true)
                            localStorage.setItem(`state${props.id}`, !selected)
                            props.addToCart(currentItem)
                        }} />
                    }
                </figure>
                <div className="cards-item-info">
                    <h5 className="cards-item-text">
                        {props.text}
                    </h5>
                </div>
            </div>
            </li>   
        </>
    )
}

export default Carditem

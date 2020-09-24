import React from 'react'
import './Cartarea.css'
const Cartarea = (props) => {
    // Variables for local storage and total price declared
    let storedCart = localStorage.getItem("cart");
    let parsedCart = JSON.parse(storedCart)
    let selectedItems
    let prices = []
    let total
    // Populate cart are with local stprage cart
    if(parsedCart === null) {
        total = 0
        selectedItems= [ ]
    } else if(parsedCart.length > 0) {
        selectedItems = parsedCart.map(item=>{
            return (
                <tr className="item-row" key={item.id}>
                    <td className="text-cell">
                        <h4>
                            {item.text}
                        </h4>
                    </td>
                    <td className="price-cell">
                        <h4>
                            {item.price}
                        </h4>
                    </td>
                </tr>
            )
        })
    } 
    // Calculate the total price in cart
    if(parsedCart.length >= 1) {
        parsedCart.forEach(item=>{
            return prices.push(Number(item.price))
        })
        total = prices.reduce((a,b) => a + b) 
    }
    
    return (
        <div className="cart-area">
            <div className="cart-area-wrapper">
                <div className="cart-area-title">
                    <h1>Your Cart</h1>
                </div>
                <div className="cart-area-items">
                    <table>
                        <thead>
                        <tr className="headings">
                            <th>
                                Gallery name
                            </th>
                            <th>
                                Price
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {selectedItems}
                        </tbody>
                        <tfoot className="totals-area">
                            <tr className="total">
                                <td>
                                    {
                                        !total ? `Total (ex 20% VAT) : £ 0 `:`Total (ex 20% VAT) : £ ${total}`
                                    }
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cartarea
import React,{useState} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Home from "./components/pages/Home";
import {Navbar} from './components/Navbar/Navbar';
import Gallery from "./components/pages/Gallery";
import Gallerydata from "./components/Gallerydata/Gallerydata"
import Cart from "./components/pages/Cart";

const App = () => {

  // State Area
  const [cart,setCart] = useState([ ])
  // State Area End
  let storedCart = localStorage.getItem("cart")
  // Add item to cart function
  const addItem = (item) => {
    const selectedItem = Gallerydata.find(card => {
      return card.id === item.key
    })
    let updatedCart = [...cart,selectedItem]
    setCart(updatedCart)
    localStorage.setItem("cart",JSON.stringify(updatedCart))
  }
  // Delete item from cart function
  const deleteItem = (item) => {
      const parsedCart = JSON.parse(storedCart)
      const filterdCart = parsedCart.filter(card => {
        return card.id !== item.key
      })
      setCart(filterdCart)
      localStorage.setItem("cart",JSON.stringify(filterdCart))
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar
        addItem={addItem}
        deleteItem={deleteItem} 
      />
      <Switch>
        <Route exact path="/NightScenz--Project-5">
          <Home
            addItem={addItem}
            deleteItem={deleteItem}
          />
        </Route>
        <Route  path="/gallery">
          <Gallery
            addItem={addItem}
            deleteItem={deleteItem}
          />
        </Route>
        <Route path="/cart">
          <Cart
            addItem={addItem}
            deleteItem={deleteItem}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

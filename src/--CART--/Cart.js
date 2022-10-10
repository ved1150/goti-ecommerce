import React, { useState } from 'react'
import "./Cart.css"
export default function Cart(props) {
  let [cartElements , setCartElements ]= useState([
    {
      id:1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      id:2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
      {
        id:3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ])
  
  if (!props.open) return
  const singlecartElements = cartElements.map((cartItem) => {
        function removeItemFromCart(){
          setCartElements (() => cartElements =cartElements.filter(element => element.id !== cartItem.id)) 
        }
        return(
          <div className='CartItem'>
              <div className='item'>
                <img src={cartItem.imageUrl} alt=""  width={70} height={70} />
                <h4> {cartItem.title}</h4>
              </div>
              <h3 className='price'>{cartItem.price}$</h3>
              <div className='quantity'>
                <input type="number" min="1" max="1" value="1"/>
                <button className='remove' onClick={removeItemFromCart}>Remove</button>
              </div>
              <br />
          </div>
        )
  })
  return (
    <div className='Cart'>
          <img  className='cancle-icon' src='https://cdn-icons-png.flaticon.com/512/4347/4347434.png' alt='' onClick={props.close} width={30} height={30}/>
          <h1 className='centerTheCartName'>Cart</h1>
        <div className='product-info-tag'>
          <h3 className='item'>ITEM</h3>
          <h3 className='price'>PRICE</h3>
          <h3 className='quantity'>QUANTITY</h3>
        </div>
          {singlecartElements}
        <button className='purchase'>PURCHASE</button>
    </div>
  )
}

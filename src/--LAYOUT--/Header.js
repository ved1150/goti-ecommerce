import React from 'react'
import CartButton from "../--CART--/CartButton"
import "./Header.css"
export default function Header() {
  return (
    <React.Fragment >
        <div className='header'>
            <div className='upperPart'>
                <h2>Home</h2>
                <h2>Store</h2>
                <h2>About</h2>
                <CartButton />
            </div>
            <div className='lowerPart'>
                <h1>The Generics</h1>
            </div>
        </div>
    </React.Fragment>
  )
}

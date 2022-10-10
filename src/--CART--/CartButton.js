import React, { useState } from 'react'
import Cart from "./Cart"
export default function CartButton() {
  const [count ,setCount] = useState(0)
  const [isOpen ,setIsOpen] = useState(false)

  function showTheCart() {
      setIsOpen(true)
  }
  function hideTheCart(){
      setIsOpen(false)
  }
  return (
    <div>
      <button onClick={showTheCart}>cart {count}</button>
      <Cart open={isOpen} close={hideTheCart} />
    </div>
  )
}

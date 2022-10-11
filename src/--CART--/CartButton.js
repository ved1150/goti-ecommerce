import React, { useState ,useContext} from 'react'
import Cart from "./Cart"
import storeContext from '../--STORE--/storeContext'

export default function CartButton() {
  const a = useContext(storeContext)
  const [isOpen ,setIsOpen] = useState(false)

  function showTheCart() {
      setIsOpen(true)
  }
  function hideTheCart(){
      setIsOpen(false)
  }
  return (
    <div>
      <button onClick={showTheCart}>cart {a.totalElements}</button>
      <Cart open={isOpen} close={hideTheCart} />
    </div>
  )
}

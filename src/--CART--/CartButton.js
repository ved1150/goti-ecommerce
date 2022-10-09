import React, { useState } from 'react'

export default function CartButton() {
  const [count ,setCount] = useState(0)
  return (
    <div>
      <button>cart {count}</button>
    </div>
  )
}

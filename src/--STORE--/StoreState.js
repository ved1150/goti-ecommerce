import { useState } from "react"
import StoreContext from "./storeContext"


export default function StoreState(props) {
    const [totalElements , setTotalElements] = useState(0)
    const cart ={
        cartElements : [],
        totalElements : totalElements,
        setTotalCount : (pre) => {
          setTotalElements( totalElements +pre)
        }
    }
  return (
    <StoreContext.Provider value={cart}>
        {props.children}
    </StoreContext.Provider>
  )
}

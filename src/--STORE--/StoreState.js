import StoreContext from "./storeContext"


export default function StoreState(props) {

    const cart ={
        cartElements : [],
        totalElements : 0
    }
  return (
    <StoreContext.Provider value={cart}>
        {props.children}
    </StoreContext.Provider>
  )
}

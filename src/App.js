import React from 'react'
import Header from './--LAYOUT--/Header'
import Main from './--LAYOUT--/Main'
import Footer from './--LAYOUT--/Footer'
import StoreState from './--STORE--/StoreState'
export default function App() {
  
  return (
    <div>
        <StoreState>
          <Header />
          <Main />
          <Footer />
        </StoreState>
    </div>
    
  )
}

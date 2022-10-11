import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <React.Fragment >
        <div className='header'>
            <div className='upperPart'>
                <Link to='/home' style={{fontSize : 30}}>Home</Link>
                <Link to='/store' style={{fontSize : 30}}>Store</Link>
                <Link to='/about' style={{fontSize : 30}}>About</Link>
            </div>
            <div className='lowerPart'>
                <h1>The Generics</h1>
            </div>
        </div>
    </React.Fragment>
  )
}

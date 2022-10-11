import React from 'react'
export default function Footer() {
  return (
    <React.Fragment >
    <div className='footer'>
        <div >
            <h1 style={{fontSize : 40}}>The Generics</h1>
        </div>
        <div className='footer-icon' >
            <img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' alt='' width={50} height={50}/>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174872.png' alt='' width={50} height={50}/>
            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt='' width={50} height={50}/>
        </div>
    </div>
</React.Fragment>
  )
}

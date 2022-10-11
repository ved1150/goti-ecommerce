import React from 'react'

export default function tours() {
    let arr = [
        {
            date : "JUL 16",
            state : "DETROIT, MI",
            place : "DTE ENERGY MUSIC THEATRE"
        },
        {
            date : "JUL 19",
            state : "DETROIT, MI",
            place : "DTE ENERGY MUSIC THEATRE"
        },
        {
            date : "JUL 22",
            state : "DETROIT, MI",
            place : "DTE ENERGY MUSIC THEATRE"
        },
        {
            date : "JUL 29",
            state : "DETROIT, MI",
            place : "DTE ENERGY MUSIC THEATRE"
        },
        {
            date : "AUG 2",
            state : "DETROIT, MI",
            place : "DTE ENERGY MUSIC THEATRE"
        },
        {
            date : "AUG 7",
            state : "DETROIT, MI",
            place : "DTE ENERGY MUSIC THEATRE"
        }
    ]
  return (
    <div>
        <h1 style={{ textAlign: "center" , marginTop : 100}}>Tours</h1>
        {
            arr.map((item) => {
                return(
                    <>
                    <div className='home-page-item'>
                        <div>{item.date}</div>
                        <div>{item.state}</div>
                        <div>{item.place}</div>
                        <button>BUY TICKETS</button>
                        
                    </div>
                    <hr />
                    </>
                )
            })
        }
      
    </div>
  )
}

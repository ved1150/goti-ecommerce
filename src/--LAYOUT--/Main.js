import React from 'react'
import "./Main.css"
export default function Main() {
    const products =[{
        id : 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        id : 2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        id : 3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        id : 4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }]
    const singleProduct = products.map((product) => {
          return(
            <div >
                <h2>{product.id}. {product.title}</h2>
                <img src={product.imageUrl} alt=""   />
                <h3>{product.price}$</h3>
                <button className='add'>Add To Cart</button>
            </div>
          )
    })
  return (
    <div className='product'>{singleProduct}</div>
  )
}

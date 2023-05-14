import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import {CardReducer, addProduct, removeProduct} from '../Data/CardSlice'

export default function SingleProduct({product}) {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.CardReducer.cart);
    const cardItem = cart.find(item=> item.id===product.id)
    const q = cardItem?cardItem.quantity:0;
    if (q===0) {
  
    }

  return (
    <div className='cardBorder' >
        <img className='img' src={product.image} alt="" />
        <h3 className='productTitle'>{product.title}</h3>
        <p className='price'>{product.price}</p>
        <p className='desc'>{product.description}</p>
        <div className='buttonClass'>
            <button onClick={()=>{dispatch(addProduct(product.id))}}>+</button>
            <h4>{q}</h4>
            <button onClick={()=>{dispatch(removeProduct(product.id))}}>-</button>
            {/* <p >{q===0?"Quentity is already 0":""}</p> */}
        </div>

    </div>
  )
}

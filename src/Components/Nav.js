import React from 'react'
import './Nav.css'
import {  useSelector } from 'react-redux'
import {CardReducer} from '../Data/CardSlice'

function Nav() {
  const cart = useSelector(state=>state.CardReducer.cart);
   let total =0;
   for (const iterator of cart) {
    total+=iterator.quantity;
   }
  return (
    <div className='nav'>
      <h1>My Myntra</h1>
      <div className='under'>
        <h4>Card</h4>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default Nav
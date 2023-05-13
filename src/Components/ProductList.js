import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadData } from '../Data/ProductSlice';

function ProductList() {

    const dispatch = useDispatch()
       
        const productArray = useSelector((state)=>state.ProductReducer.ProductArray);
    useEffect(()=>{

        loadData1()
    }
        ,[])
        async function loadData1(){
            const data = await fetch('https://fakestoreapi.com/products');
            const jsonData = await data.json();
            dispatch(loadData(jsonData));

        }
  return (
    <div>
     { productArray.map(item=> {
        return <p>{item.title}</p>
     })}
    </div>
  )
}

export default ProductList
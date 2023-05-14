import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadData } from '../Data/ProductSlice';
import SingleProduct from './SingleProduct';

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
    <div style={{display:"grid", marginTop:"50px", gridTemplateColumns:"repeat(2,40%)",justifyContent:"space-evenly", rowGap:"50px"}}>
     { productArray.map(item=> {
        return <SingleProduct key={item.id}  product={item}/>
     })}
    </div>
  )
}

export default ProductList
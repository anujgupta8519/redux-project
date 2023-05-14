import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from '../Data/ProductSlice';
import SingleProduct from './SingleProduct';

function ProductList() {

    const dispatch = useDispatch()
       
        const productArray = useSelector((state)=>state.ProductReducer.ProductArray);
        const status = useSelector((state)=>state.ProductReducer.status);
    useEffect(()=>{
      dispatch(fetchData())
     
    }
        ,[])
        if (status==="loading") {
            return <h1>loadData....</h1>
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
import React ,{useEffect}from 'react'
//import axios from'axios'
import { useSelector,useDispatch } from 'react-redux';
import {fetchProducts} from'../redux/actions/productActions'
import ProductComponent from './productComponent'

const ProductListing = () => {
    const products=useSelector((state)=> state)
    const dispatch = useDispatch();

    // const fetchProducts =async ()=>{
    //     const response =await axios.get('https://fakestoreapi.com/products').catch((err)=>{
    //         console.log( "Err",err);
    //     })

    //     dispatch (setProducts (response.data));
    // }
    useEffect(()=>{
       dispatch(fetchProducts());
    },[]);
console.log("products:",products)
return (
    <div className="container"><br/><br/><br/><br/>
      <ProductComponent/>
    </div>
  );
}

export default ProductListing;
import '../app.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../redux/productSlice';

export default function ProductPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(
            getSingleProduct({ id: params.id }))
    }, [dispatch])

    console.log(products);

    return (
        <>
            <div className='bg__black'>
                <div className=' container'>
                    {products.title ?
                        <>
                            <h1>{products.title}</h1>
                            <img className='prod__single__img' src={products.thumbnail} alt={products.title} />
                            <span>Brand: {products.brand}</span>
                            <span>Category: {products.category}</span>
                            <span>Price: ${products.price}</span>
                            <span>DiscountPercentage: ${products.discountPercentage}</span>
                            <span>{products.description}</span>
                        </> :
                        <p>Loading...</p>
                    }
                </div>
            </div>
        </>
    )
}

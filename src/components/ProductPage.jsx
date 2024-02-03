import '../app.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
    const [product, setProduct] = useState([]);
    const params = useParams();

    const handleData = async () => {
        const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
        setProduct(res.data);
    }

    useEffect(() => {
        handleData()
    }, [])

    // console.log(product);

    return (
        <>
            <div className='bg__black'>
                <div className=' container'>
                    <h1>{product.title}</h1>
                    <img className='prod__single__img' src={product.thumbnail} alt="" />
                    <span>Brand: {product.brand}</span>
                    <span>Category: {product.category}</span>
                    <span>Price: ${product.price}</span>
                    <span>DiscountPercentage: ${product.discountPercentage}</span>
                    <span>{product.description}</span>
                </div>
            </div>
        </>
    )
}

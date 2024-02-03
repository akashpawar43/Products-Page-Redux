import axios from 'axios';
import { useEffect, useState } from 'react';
import '../app.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../redux/productSlice';

export default function Home() {
    // const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products)

    // const handleData = async () => {
    //     const res = await axios.get('https://dummyjson.com/products');
    //     setProduct(res.data.products);
    // }

    useEffect(() => {
        dispatch(getDataAsync());
    }, [dispatch])

    // console.log(products);

    const handlePage = (selectedPage) => {
        if (
            selectedPage >= 1 &&
            selectedPage <= products.length / 10 &&
            selectedPage !== page
        )
            setPage(selectedPage)
    }
    return (
        <>
            <div className='bg__black'>
                <div className=' container'>
                    <h1>Products Page</h1>
                    {products.length > 0 ? <div className='products__list'>
                        {products.slice(page * 10 - 10, page * 10).map((prod, i) => (
                            <Link to={`/product/${prod.id}`} className='link' key={i}>
                                <div className='product'>
                                    <img src={prod.thumbnail} alt={prod.title} />
                                    <span>{prod.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div> :
                    <div>Loading...</div>
                    }

                    {products.length > 0 && <span className='pagination'>
                        <span className={page > 1 ? "" : "disable"} onClick={() => handlePage(page - 1)}>⬅️</span>

                        {[...Array(products.length / 10)].map((_, i) => (
                            <span className={page === i + 1 ? "bg__gray" : ""} onClick={() => handlePage(i + 1)} key={i}>{i + 1}</span>
                        ))}

                        <span className={page < (products.length / 10) ? "" : "disable"} onClick={() => handlePage(page + 1)}>➡️</span>
                    </span>}
                </div>
            </div>
        </>
    )
}

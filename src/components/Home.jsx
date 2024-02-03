import axios from 'axios';
import { useEffect, useState } from 'react';
import '../app.css'
import { Link } from 'react-router-dom';

export default function Home() {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);

    const handleData = async () => {
        const res = await axios.get('https://dummyjson.com/products');
        setProduct(res.data.products);
    }

    useEffect(() => {
        handleData()
    }, [])

    const handlePage = (selectedPage) => {
        if (
            selectedPage >= 1 &&
            selectedPage <= product.length / 10 &&
            selectedPage !== page
        )
            setPage(selectedPage)
    }
    return (
        <>
            <div className='bg__black'>
                <div className=' container'>
                    <h1>Products Page</h1>
                    {product.length > 0 && <div className='products__list'>
                        {product.slice(page * 10 - 10, page * 10).map((prod, i) => (
                            <Link to={`/product/${prod.id}`} className='link' key={i}>
                                <div className='product'>
                                    <img src={prod.thumbnail} alt={prod.title} />
                                    <span>{prod.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    }

                    {product.length > 0 && <span className='pagination'>
                        <span className={page > 1 ? "" : "disable"} onClick={() => handlePage(page - 1)}>⬅️</span>

                        {[...Array(product.length / 10)].map((_, i) => (
                            <span className={page === i + 1 ? "bg__gray" : ""} onClick={() => handlePage(i + 1)} key={i}>{i + 1}</span>
                        ))}

                        <span className={page < (product.length / 10) ? "" : "disable"} onClick={() => handlePage(page + 1)}>➡️</span>
                    </span>}
                </div>
            </div>
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ProductsCard = ({ products }) => {

    const dispatch = useDispatch()

    function handleAddToCart(product) {
        dispatch({ type: "ADD_TO_CART", payload: product });
    }

    return (
        <div className='row g-3'>
            {products.map((product) => (
                <div className="col-md-6 col-lg-3" key={product.id}>
                    <div className="card overflow-hidden" aria-hidden="true">
                        <img className='card-image-top placeholder-card-image' src={product.image} alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title text-truncate">
                                {product.title}
                            </h5>
                            <div className="card-text">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>${product.price}</span>
                                    <span>
                                        <i className="fa-solid fa-star text-warning"></i> {product.rating.rate} / {product.rating.count}
                                    </span>
                                </div>
                                <span className='product-description my-3'>
                                    {product.description}
                                </span>
                            </div>
                            <div className="d-flex gap-1">
                                <Link
                                    to={`/details/${product.id}`}
                                    className='btn btn-primary col-6 me-1'
                                >
                                    Read More
                                </Link>
                                <button onClick={() => handleAddToCart(product)} className='position-relative btn btn-success col-6'>
                                    Add To Cart
                                    <span className="position-absolute top-0 start-100 right-2 translate-middle badge rounded-pill bg-danger">
                                        
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsCard
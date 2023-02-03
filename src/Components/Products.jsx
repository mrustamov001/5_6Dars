import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useProducts from '../Hooks/useProducts'
import PlaceholderCards from './placeholderCards'
import ProductsCard from './productsCard'

const Products = () => {

    const [products, loadings] = useProducts()

    return (
        <div className="container py-3">
                {loadings ? <PlaceholderCards /> : <ProductsCard products={products} />}
        </div>
    )
}

export default Products
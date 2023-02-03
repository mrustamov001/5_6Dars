import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function useProducts() {
    let ummounted = false
    const [products, setProducts] = useState([])
    const [loadings, setLoading] = useState(false)

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true)
                let res = await axios.get('/products')
                if(ummounted) return
                if (res.status === 200) {
                    setProducts(res.data)
                }
            } catch (error) {
                toast(error.response.data.error)
            } finally{
                setLoading(false)
            }
        }
        getProducts()

        return () => {
            ummounted = true
        }
    }, [])

    return [products, loadings]
}

export default useProducts
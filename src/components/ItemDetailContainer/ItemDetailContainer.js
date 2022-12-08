import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom" // para traer los parámetros de la URL

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=>{
        getProduct(productId).then(response => {
            console.log(response)
            setProduct(response)
        }).finally ( () => {
            setLoading(false)
        })
    },[])

    console.log(product)

    if (loading) {
        return <h1>cargando...</h1>
    }

    return (

        /* paso por prop todos los productos para listar */
        <div>
            <h1>Detalle de producto</h1>
            {/* card de detalle */}
            <div>{product.name}</div>
        </div>
    )
}

export default ItemDetailContainer
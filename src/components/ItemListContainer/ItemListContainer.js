// componente que se encarga de llamar a los productos

import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../asyncMock"

const ItemListContainer = () => {

    const [products, setProducts] = useState([]) // creo un estado para guardar los rdos de la consulta
    const [loading, setLoading] =useState(true)

    const { categoryId} = useParams()

    // uso useEffect para controlar los estados. Después de que el componente sea montado en pantalla se ejecuta la función dentro de Use Effect --> incluyo array vacío.

    useEffect (() =>{

        if (!categoryId){ 
        
        console.log(getProducts()) // retorna una promesa
        getProducts().then (res => {
            console.log (res) // retorna el array de objetos
            setProducts(res) // almaceno la rta de la promesa, seteo el estado con otro valor
        }).catch (error => {
            console.log(error) // método catch en caso de que haya un error
        }).finally(
            setLoading (false)
        )  
        } else {
            getProductsByCategory(categoryId).then (res => {
                console.log (res) // retorna el array de objetos
                setProducts(res) // almaceno la rta de la promesa, seteo el estado con otro valor
            }).catch (error => {
                console.log(error) // método catch en caso de que haya un error
            }).finally(
                setLoading (false)
            )
        }
    },[categoryId])

    console.log(products)

    if (loading){
        return <h1> Loading..</h1>
    }

    // con el método map puedo transformar cada elemento del array en un componente (función)
    // const productosTransformados = products.map(product => <li key={product.id}>{product.name}</li>)

    return (
        <div>
            <ItemList products = {products}/> 
        </div>
    )
}

export default ItemListContainer


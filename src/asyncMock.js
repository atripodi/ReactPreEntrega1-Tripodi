// simulo base de datos con un array de objetos

const products = [
    {
        id: 1,
        name: "Taza serie 001",
        description: "Taza de cerámica realizada a mano en torno alfarero esmaltada jaspeada.",
        dimensiones: "Dimensiones: xcm alto x xcm Ø",
        price: 350,
        stock:1,
        category: "ceramica"  
    }
]


// exporto para llamarla desde un componente

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            resolve (products)
        },1500)
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve, reject)=> {
        setTimeout (()=> {
            resolve (products.find(product => product.id === id))
        },1500)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve, reject)=> {
        setTimeout (()=> {
            resolve (products.filter(product => product.category === categoryId))
        },1500)
    })
}
import React, { useState } from 'react'
import { Header } from './Header/Header'
import { FormProduct } from './FormProduct/FormProduct'
import { ListProducts } from './ListProducts/ListProducts'
interface ItemProduct{
    precio: number,
    imagen: string,
    nombre: string,

}



export const AppProduct = () => {
  
    const [products, setProducts] = useState<ItemProduct[]>([])

    const handleAddProducts = (newItem: ItemProduct) =>{
        setProducts((prev)=>[...prev, newItem])
    }
  
  
    return (
        <div>
            <Header/>
            <h2 className="text-center"> Formulario</h2>
            <FormProduct handleAddProduct = {handleAddProducts} />
            <h2 className="text-center"> Productos</h2>
            {products.length > 0  ? <ListProducts arrItems={products}/> : ( <h3 className="text-center" >No hay productos</h3>) } 
        </div>
    );

}

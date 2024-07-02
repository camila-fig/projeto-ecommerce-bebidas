import "./lista.scss"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../utils/firebase"
import { Edicao } from "./edicao"

export function Lista() {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)

    //Mostra todos os produtos cadastrados no Firebase pela página de cadastro
    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'))
            const productsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(productsList)
        }

        fetchProducts()
    }, [])

    // console.log(products)

    //Para editar um específico produto
    const handleEdit = (product) => {
        setSelectedProduct(product)
    }

    //Para salvar as informações editadas
    const handleSave = async () => {
        setSelectedProduct(null)
        const querySnapshot = await getDocs(collection(db, 'products'))
        const productsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setProducts(productsList)
    }

    //Para excluir um produto
    const handleDelete =async (productId) => {
        await deleteDoc(doc(db, 'products', productId))
        setProducts(products.filter(product => product.id !== productId))
    }

    return (
        <div>
            <h1>Lista de produtos</h1>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>Descrição: {product.description}</p>
                                <p>Preço: {product.price}</p>
                                <p>Preço promocional: {product.promotionPrice}</p>
                                <p>Estoque: {product.stock}</p>
                                {product.imageUrl && <img className="image-list" src={product.imageUrl} />}
                                <button onClick={() => handleEdit(product)}>Editar</button>
                                <button onClick={() => handleDelete(product.id)}>Excluir</button>
                            </li>
                        )
                    })
                }
            </ul>
            {
                selectedProduct && (
                    <Edicao
                        product={selectedProduct}
                        onSave={handleSave}
                        onClose={() => setSelectedProduct(null)}
                    />
                )
            }
        </div>
    )
}
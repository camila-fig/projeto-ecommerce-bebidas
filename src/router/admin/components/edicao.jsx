import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../utils/firebase"
import { useState } from "react"

//Para editar os produtos
export function Edicao(product, onClose, onSave) {

    //Criação de estados já contendo as informações salvas
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [promotionPrice, setPromotionPrice] = useState(product.promotionPrice)
    const [stock, setStock] = useState(product.stock)

    const handleSave = async () => {
        const productRef = doc(db, 'products', product.id)
        await updateDoc(productRef, { name, description, promotionPrice, price, stock })
        onSave()
    }

    return (
        <div>
            <h1>Edição de Produtos</h1>
            <div>
                <label>Nome: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Descrição: </label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Preço: </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Preço promocional: </label>
                <input
                    type="number"
                    value={promotionPrice}
                    onChange={(e) => setPromotionPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Estoque: </label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={onClose}>Cancelar</button>
        </div>

    )
}
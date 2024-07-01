import './cadastro.scss'
import { useRef, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { db, storage } from '../../../utils/firebase'
import { addDoc, collection } from 'firebase/firestore'

export function Cadastro() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [promotionPrice, setPromotionPrice] = useState('')
    const [stock, setStock] = useState('')
    const [image, setImage] = useState(null)
    const fileInputRef = useRef(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        //Para criar a URL da imagem
        let imageUrl = ''
        if (image) {
            const storageRef = ref(storage, `produts/${image.name}`)
            await uploadBytes(storageRef, image)
            imageUrl = await getDownloadURL(storageRef)
        }

        try {
            await addDoc(collection(db, 'products'), {
                name,
                description,
                price,
                promotionPrice,
                stock,
                imageUrl,
                createdAt: new Date()
            })
            console.log("Produto cadastrado com sucesso!")
        } catch (err) {
            console.log("Erro", err)
        }

        setName('')
        setDescription('')
        setPrice('')
        setPromotionPrice('')
        setStock('')
        setImage(null)
        fileInputRef.current.value = null
    }

    //Para trabalhar com a imagem
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(file)
            }
            reader.readAsDataURL(file)
        } else {
            setImage(null)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form-cadastro-container'>
            <p>Controle de Produtos</p>
            <div className='cadastro-nome'>
                <label>Nome: </label>
                <input
                    type="text"
                    className='cadastro-input-nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='cadastro-descricao'>
                <label>Descrição: </label>
                <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='cadastro-preco'>
                <label>Preço: </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='cadastro-preco-promocional'>
                <label>Preço promocional: </label>
                <input
                    type="number"
                    value={promotionPrice}
                    onChange={(e) => setPromotionPrice(e.target.value)}
                />
            </div>
            <div className='cadastro-estoque'>
                <label>Estoque: </label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>
            <div className='cadastro-imagem'>
                <label>Imagem: </label>
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept='image/*'
                    ref={fileInputRef}
                />
            </div>
            {/* Para mostrar a imagem */}
            {
                image && (
                    <img className='cadastro-mostrar-image' src={URL.createObjectURL(image)} />
                )
            }
            <button type="submit">Cadastrar Produto</button>
        </form>
    )
}
import { useState } from 'react'
import { FormInput } from '../../components/form-input/form-input'
import { Button } from '../../components/button/button'
import './sale.scss'

const defaultFormFields = {
    nome: "",
    email: ""
}

export function Sale() {

    const [formFilds, setFormFilds] = useState(defaultFormFields)
    const { nome, email } = formFilds

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFilds({ ...formFilds, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormFilds(defaultFormFields)
    }

    return (
        <div className="sale-container">
            <div className="sale-text">
            <h4 className='title'>RECEBA OFERTAS</h4>
            <p className='sale-subtitle'>Obtenha ofertas exclusivas das melhores bebidas.</p>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <FormInput
                    label="Nome"
                    type="text"
                    requeried
                    name="nome"
                    placeholder="digite seu nome"
                    autocomplete="off"
                    onChange={handleChange}
                    value={nome}
                />
                <FormInput
                    label="E-mail"
                    type="email"
                    requeried
                    name="email"
                    placeholder="digite seu e-mail"
                    autocomplete="off"
                    onChange={handleChange}
                    value={email}
                />
            </form>
            <Button className="sale-button" type="submit">
                Cadastrar
            </Button>
        </div>
    )
}
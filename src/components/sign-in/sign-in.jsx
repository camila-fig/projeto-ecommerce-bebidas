import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import './sign-in.scss'

const defaultFormFields = {
    email: "",
    senha: ""
}

export function SingIn() {

    const [formFilds, setFormFilds] = useState(defaultFormFields)
    const { email, senha } = formFilds

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFilds({ ...formFilds, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormFilds(defaultFormFields)
    }

    return (
        <div>
            <p className="form-title">Você já possui conta?</p>
            <form className="form-container" onSubmit={handleSubmit}>
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
                <FormInput
                    label="Senha"
                    type="password"
                    requeried
                    name="senha"
                    placeholder="digite sua senha"
                    onChange={handleChange}
                    value={senha}
                />
                <Button type="submit">
                    Entrar
                </Button>
                <Button type="button" typeButton="google">
                    Entrar com conta Google
                </Button>
            </form>
        </div>
    )
}
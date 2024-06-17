import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import { createAuthUserWithEmailPassword } from "../../utils/firebase";

const defaultFormFields = {
    nome: "",
    email: "",
    senha: "",
    confirmeSenha: ""
}

export function SingUp() {

    const [formFilds, setFormFilds] = useState(defaultFormFields)
    const { nome, email, senha, confirmeSenha } = formFilds

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFilds({ ...formFilds, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (senha !== confirmeSenha) {
            alert("As senhas digitadas não são iguais")
            return
        }


        //Para chamar a função de logar com email e senha
        try {
            //processo de criar conta
            const { user } = createAuthUserWithEmailPassword(email, senha)
            console.log(user)
        } catch (erro) {
            console.log("erro", erro)
        }

        //Mostra os dados do usuário novo no console
        // console.log(formFilds)
        setFormFilds(defaultFormFields)
    }

    return (
        <div>
            <p className="form-title">Você não possui conta?</p>
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
                <FormInput
                    label="Senha"
                    type="password"
                    requeried
                    name="senha"
                    placeholder="digite sua senha"
                    autocomplete="off"
                    onChange={handleChange}
                    value={senha}
                />
                <FormInput
                    label="Confirme sua senha"
                    type="password"
                    requeried
                    name="confirmeSenha"
                    placeholder="digite sua senha novamente"
                    autocomplete="off"
                    onChange={handleChange}
                    value={confirmeSenha}
                />
                <Button type="submit">
                    Cadastrar
                </Button>
            </form>
        </div>
    )
}
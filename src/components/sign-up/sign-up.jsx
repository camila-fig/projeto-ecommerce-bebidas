import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";

export function SingUp() {
    return (
        <div>
            <p>Você já possui conta?</p>
            <form>
                <FormInput
                    label="Nome"
                    type="text"
                    requeried
                    name="nome"
                    placeholder="Digite seu nome"
                    autocomplete="off"
                />
                <FormInput
                    label="E-mail"
                    type="email"
                    requeried
                    name="email"
                    placeholder="Digite seu e-mail"
                    autocomplete="off"
                />
                <FormInput
                    label="Senha"
                    type="password"
                    requeried
                    name="senha"
                    placeholder="Digite sua senha"
                    autocomplete="off"
                />
                <FormInput
                    label="Confirme sua senha"
                    type="password"
                    requeried
                    name="confirmeSenha"
                    placeholder="Digite sua senha novamente"
                    autocomplete="off"
                />
                <Button type="submit">
                    Cadastrar
                </Button>
            </form>
        </div>
    )
}
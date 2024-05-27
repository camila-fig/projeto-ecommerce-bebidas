import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";

export function SingIn() {
    return (
        <div>
            <p>Você já possui conta?</p>
            <form>
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
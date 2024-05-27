import { SingIn } from "../../components/sign-in/sign-in";
import { SingUp } from "../../components/sign-up/sign-up";
import './auth.scss'

export function Auth() {
    return (
        <div className="container-auth">
            <SingIn />
            <SingUp />
        </div>
    )
}
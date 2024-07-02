import './index.scss'
import { Cadastro } from "./components/cadastro";
import { Lista } from './components/lista';

export function Admin() {
    return (
        <>
            <div className="admin-container">
                <Cadastro />
                <Lista />
            </div>
        </>
    )
}
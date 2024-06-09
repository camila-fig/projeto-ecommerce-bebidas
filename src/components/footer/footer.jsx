import './footer.scss'
import Visa from '../../assets/visa.png'
import Mastercard from '../../assets/mastercard.png'
import Hipercard from '../../assets/hipercard.png'
import American from '../../assets/american.png'
import Pix from '../../assets/pix.png'
import Boleto from '../../assets/boleto.png'

export function Footer() {
    return (
        <div className="footer-container">
            <div className="category-warning">É proibida a venda de bebidas alcoólicas para menores de 18 anos.</div>
            <div className="footer-payment">
                <p className='footer-title'>Formas de Pagamento</p>
                <div className="image-logos">
                    <img className='payment-logo' src={Visa} alt="Visa" />
                    <img className='payment-logo' src={Mastercard} alt="Mastercard" />
                    <img className='payment-logo' src={Hipercard} alt="Hipercard" />
                    <img className='payment-logo' src={American} alt="America Express" />
                    <img className='payment-logo' src={Pix} alt="Pix" />
                    <img className='payment-logo' src={Boleto} alt="Boleto bancário" />
                </div>
            </div>
            <div className="footer-identification">
                <p className='footer-title'>Identificação</p>
                <div className="footer-text">
                    <p>Autora: Camila A. Figueirêdo</p>
                    <p>E-mail: camila_fig@hotmail.com</p>
                    <p>Projeto realizado para as aulas de React JS</p>
                    <p>Junho/2024</p>
                </div>
            </div>
        </div>
    )
}
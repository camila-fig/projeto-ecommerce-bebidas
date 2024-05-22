import './App.scss'
import { Navigation } from './router/navigation/navigation'

export function App() {
  return (
    <>
    <Navigation/>
    <h4 className='title'>OFERTAS DO MÊS</h4>
    <h4 className='title'>MAIS VENDIDOS</h4>
    <h4 className='title'>RECEBA OFERTAS</h4>
    </>
  )
}

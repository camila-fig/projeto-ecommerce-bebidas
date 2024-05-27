import './App.scss'
import { Auth } from './router/auth/auth'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'

export function App() {
  return (
    <>
    <Navigation/>
    <Home />
    <h4 className='title'>OFERTAS DO MÊS</h4>
    <h4 className='title'>MAIS VENDIDOS</h4>
    <h4 className='title'>RECEBA OFERTAS</h4>
    <Auth />
    </>
  )
}

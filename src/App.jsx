import './App.scss'
import { Auth } from './router/auth/auth'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { Sale } from './router/sale/sale'
import { Shop } from './router/shop/shop'

export function App() {
  return (
    <>
    <Navigation/>
    <Home />
    <h4 className='title'>OFERTAS DO MÊS</h4>
    <Shop />
    <Sale />
    {/* <Auth /> */}
    </>
  )
}

import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './router/auth/auth'
import { Navigation } from './router/navigation/navigation'
import { Shop } from './router/shop/shop'
import { Home } from './router/home/home'
import { Checkout } from './router/checkout/checkout'
import { Admin } from './router/admin'
import { ProductPreview } from './components/product-preview/product-preview'


export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
          <Route path='product-detail/:id' element={<ProductPreview />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        {/* <Route path='/admin'>
          <Route path='login' element={<Admin />} />
        </Route> */}
      </Routes>
    </>
  )
}

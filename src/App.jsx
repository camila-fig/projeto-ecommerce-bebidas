import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './router/auth/auth'
import { Navigation } from './router/navigation/navigation'
import { Shop } from './router/shop/shop'
import { Home } from './router/home/home'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
        </Route>
      </Routes>
    </>
  )
}

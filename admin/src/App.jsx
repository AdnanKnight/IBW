import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Products from './pages/products/Products'
import ProductUpdate from './pages/ProductUpdate/ProductUpdate'
import ProductCreate from './pages/ProductCreate/ProductCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/create' element={<ProductCreate />} />
        <Route path='/products/update' element={<Products />} />
        <Route path='/products/update/:id' element={<ProductUpdate />} />
        <Route path='/products/delete' element={<Products />} />
      </Route>
    </Routes>
  )
}

export default App

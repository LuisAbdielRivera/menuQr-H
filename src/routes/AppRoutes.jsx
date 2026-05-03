import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from '../pages/Menu'
import ProductDetail from '../pages/ProductDetail'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path='/'
          element={<Menu />}
        />

        <Route
          path='/producto'
          element={<ProductDetail />}
        />

      </Routes>
    </BrowserRouter>
  )
}
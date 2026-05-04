import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from '../pages/Menu.jsx'
import ProductDetail from '../pages/ProductDetail.jsx'
import OrderSummary from '../pages/OrderSummary.jsx'
import OrderSuccess from '../pages/OrderSuccess.jsx'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/producto" element={<ProductDetail />} />
        <Route path="/pedido" element={<OrderSummary />} />
        <Route path="/exito" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  )
}
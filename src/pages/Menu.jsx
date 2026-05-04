import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Menu() {

  const { getTotalItems } = useCart()
  const navigate = useNavigate()

  return (
    <div className="bg-black min-h-screen p-5">

      <h1 className="text-yellow-400 text-3xl font-black text-center">
        MENÚ
      </h1>

      <div className="grid gap-5 mt-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {getTotalItems() > 0 && (
        <button
          onClick={() => navigate('/pedido')}
          className="fixed bottom-5 right-5 bg-yellow-400 px-6 py-4 rounded-full font-bold shadow-lg"
        >
          Ver pedido ({getTotalItems()})
        </button>
      )}

    </div>
  )
}
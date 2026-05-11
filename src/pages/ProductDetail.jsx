import { useCart } from '../context/CartContext.jsx'
import { useNavigate } from 'react-router-dom'

export default function ProductDetail() {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const product = {
    id: 2,
    name: 'BBQ Bacon',
    price: 119,
    desc: 'Tocino crujiente y salsa BBQ',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop'
  }

  const handleAdd = () => {
    addToCart(product)
    // Removed navigation to allow adding more products
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* HEADER - Sticky */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-neutral-800 p-5 z-40">
        <button
          onClick={() => navigate(-1)}
          className="text-neutral-400 hover:text-white transition text-lg"
        >
          ←
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {/* IMAGEN */}
        <div className="rounded-3xl overflow-hidden h-64 bg-neutral-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFORMACIÓN DESTACADA */}
        <div className="space-y-3">
          <h1 className="text-3xl font-black text-yellow-400">
            {product.name}
          </h1>

          <p className="text-neutral-400 text-sm leading-relaxed">
            {product.desc}
          </p>

          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-2xl p-4">
            <p className="text-xs text-neutral-500 uppercase tracking-wider">Precio</p>
            <p className="text-3xl font-black text-yellow-400 mt-2">
              ${product.price}
            </p>
          </div>
        </div>

        {/* INFO GENERAL */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-4 space-y-2">
          <p className="text-xs text-neutral-500 uppercase tracking-wider">Nota</p>
          <p className="text-sm text-neutral-300">
            Podrás personalizar este producto después, en la pantalla de tu pedido
          </p>
        </div>
      </div>

      {/* FOOTER - Sticky */}
      <div className="border-t border-neutral-800 p-5 bg-gradient-to-t from-black via-black/95 to-transparent">
        <button
          onClick={handleAdd}
          className="w-full py-4 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-black rounded-2xl transition-all duration-300 shadow-lg hover:shadow-yellow-400/30"
        >
          ✓ Agregar al pedido
        </button>
      </div>
    </div>
  )
}
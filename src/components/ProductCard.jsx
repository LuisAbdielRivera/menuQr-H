import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Plus } from 'lucide-react'

export default function ProductCard({ product }) {

  const { addToCart } = useCart()

  return (
    <div className="bg-neutral-900 rounded-2xl overflow-hidden">

      <img src={product.image} className="h-48 w-full object-cover" />

      <div className="p-4">

        <h2 className="text-xl font-bold text-white">
          {product.name}
        </h2>

        <p className="text-neutral-400 text-sm">
          {product.desc}
        </p>

        <div className="flex justify-between mt-4 items-center">

          <span className="text-yellow-400 font-bold">
            ${product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 px-4 py-2 rounded-xl font-black text-black hover:bg-yellow-300 transition-colors duration-200 hover:animate-bounce flex items-center justify-center"
          >
            <Plus size={20} />
          </button>

        </div>

        <Link to="/producto">
          <button className="w-full mt-3 bg-white/10 py-2 rounded-lg text-white">
            Ver detalle
          </button>
        </Link>

      </div>
    </div>
  )
}
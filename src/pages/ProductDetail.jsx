import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import CustomizePanel from '../components/CustomizePanel.jsx'
import { useNavigate } from 'react-router-dom'

export default function ProductDetail() {

  const { addToCart } = useCart()
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [showCustomize, setShowCustomize] = useState(false)

  const product = {
    id: 2,
    name: 'BBQ Bacon',
    price: 119,
    desc: 'Tocino crujiente y salsa BBQ'
  }

  const handleAdd = () => {

    addToCart({
      ...product,
      notes
    })

    navigate('/')
  }

  return (
    <div className="bg-black min-h-screen text-white p-5">

      {/* HEADER */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-white/10 px-4 py-2 rounded-lg"
      >
        ← Regresar
      </button>

      {/* INFO */}
      <h1 className="text-yellow-400 text-3xl font-black">
        {product.name}
      </h1>

      <p className="mt-2 text-neutral-400">
        {product.desc}
      </p>

      <p className="mt-2 text-yellow-400 text-xl font-bold">
        ${product.price}
      </p>

      {/* INFO GENERAL */}
      <div className="mt-6 bg-neutral-900 p-5 rounded-2xl">
        <h2 className="font-bold">Información</h2>
        <p className="text-sm text-neutral-400 mt-2">
          Puedes quitar ingredientes sin costo adicional.
        </p>
      </div>

      {/* BOTÓN PERSONALIZAR */}
      <button
        onClick={() => setShowCustomize(!showCustomize)}
        className="mt-5 w-full bg-white/10 py-3 rounded-xl"
      >
        {showCustomize
          ? 'Ocultar personalización'
          : 'Personalizar hamburguesa'}
      </button>

      {/* PANEL */}
      {showCustomize && (
        <CustomizePanel onChange={setNotes} />
      )}

      {/* AGREGAR */}
      <button
        onClick={handleAdd}
        className="mt-6 w-full bg-yellow-400 text-black py-4 rounded-2xl font-black"
      >
        Agregar al pedido
      </button>

    </div>
  )
}
import { useCart } from '../context/CartContext.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function OrderSummary() {

  const { cart } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  return (
    <div className="bg-black text-white min-h-screen p-5">

      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-white/10 px-4 py-2 rounded-lg"
      >
        ← Regresar
      </button>

      <h1 className="text-yellow-400 text-2xl font-black">
        Tu pedido
      </h1>

      <div className="mt-5 space-y-4">

        {cart.map(item => (
          <div
            key={item.uniqueId}
            className="bg-neutral-900 p-4 rounded-2xl"
          >

            <p className="font-bold">
              {item.name}
            </p>

            <p className="text-sm text-neutral-400">
              ${item.price}
            </p>

            {/* PERSONALIZACIÓN */}
            {item.notes?.length > 0 && (
              <div className="mt-3 text-sm text-neutral-400">
                {item.notes.map((n, i) => (
                  <p key={i}>• {n}</p>
                ))}
              </div>
            )}

          </div>
        ))}

      </div>

      <input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mt-6 p-4 bg-neutral-800 rounded-xl outline-none"
      />

      <button
        onClick={() => navigate('/exito')}
        className="w-full mt-6 bg-yellow-400 text-black py-4 rounded-2xl font-black"
      >
        Confirmar pedido
      </button>

    </div>
  )
}
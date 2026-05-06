import { useCart } from '../context/CartContext.jsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OrderSummaryCard from '../components/OrderSummaryCard'
import EditItemModal from '../components/EditItemModal'

export default function OrderSummary() {
  const { cart, removeFromCart, updateCartItem } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const total = cart.reduce((sum, item) => sum + item.price, 0)
  const itemCount = cart.length

  const handleRemoveItem = (uniqueId) => {
    removeFromCart(uniqueId)
  }

  const handleEditItem = (uniqueId) => {
    const item = cart.find(item => item.uniqueId === uniqueId)
    setEditingItem(item)
  }

  const handleSaveEdit = (updatedItem) => {
    updateCartItem(updatedItem.uniqueId, {
      notes: updatedItem.notes,
    })
    setEditingItem(null)
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert('Por favor, ingresa tu nombre')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      navigate('/exito')
    }, 800)
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* HEADER - Sticky */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-neutral-800 p-5 z-40">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-neutral-400 hover:text-white transition text-lg"
          >
            ←
          </button>
          <h1 className="text-xl font-black text-yellow-400">Tu Pedido</h1>
          <div className="w-8" />
        </div>

        {/* TOTAL - Destacado */}
        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-2xl p-4">
          <p className="text-neutral-400 text-sm">Total a pagar</p>
          <p className="text-3xl font-black text-yellow-400">${total.toLocaleString()}</p>
          <p className="text-xs text-neutral-500 mt-1">
            {itemCount} artículo{itemCount !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* ITEMS - Scrollable */}
      <div className="flex-1 overflow-y-auto p-5 space-y-3">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-center">
            <p className="text-neutral-500 text-lg">Tu carrito está vacío</p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Agregar artículos
            </button>
          </div>
        ) : (
          cart.map((item, index) => (
            <OrderSummaryCard
              key={item.uniqueId}
              item={item}
              isLast={index === cart.length - 1}
              onRemove={handleRemoveItem}
              onEdit={handleEditItem}
            />
          ))
        )}
      </div>

      {/* FORM - Sticky Bottom */}
      <div className="bg-gradient-to-t from-black via-black/95 to-transparent border-t border-neutral-800 p-5 space-y-4">
        <div>
          <label className="text-xs text-neutral-500 uppercase tracking-wider block mb-2">
            ¿A nombre de quién va el pedido?
          </label>
          <input
            type="text"
            placeholder="Ej: Juan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-600 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400/20 transition"
          />
        </div>

        {/* CTA Principal */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || cart.length === 0}
          className="w-full py-4 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 disabled:from-neutral-500 disabled:to-neutral-600 text-black font-black rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:scale-100 flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-400/30 disabled:shadow-none"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block animate-spin">⟳</span>
              Procesando...
            </>
          ) : (
            <>
              <span>✓ Confirmar Pedido</span>
            </>
          )}
        </button>

        {/* Help text */}
        <p className="text-center text-xs text-neutral-600">
          Recibirás un código para retirar tu pedido
        </p>
      </div>

      {/* Modal de edición */}
      {editingItem && (
        <EditItemModal
          item={editingItem}
          onSave={handleSaveEdit}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  )
}
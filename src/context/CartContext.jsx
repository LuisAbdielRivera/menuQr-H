import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  // AGREGAR PRODUCTO (ahora independiente)
  const addToCart = (product) => {
    setCart(prev => [
      ...prev,
      {
        ...product,
        uniqueId: Date.now(),
        quantity: 1,
        notes: []
      }
    ])
  }

  // DISMINUIR
  const decreaseQuantity = (uniqueId) => {
    setCart(prev =>
      prev
        .map(item =>
          item.uniqueId === uniqueId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  // AUMENTAR
  const increaseQuantity = (uniqueId) => {
    setCart(prev =>
      prev.map(item =>
        item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  // ELIMINAR ITEM ESPECÍFICO
  const removeFromCart = (uniqueId) => {
    setCart(prev => prev.filter(item => item.uniqueId !== uniqueId))
  }

  // ACTUALIZAR ITEM (para editar personalización, precio, etc)
  const updateCartItem = (uniqueId, updates) => {
    setCart(prev =>
      prev.map(item =>
        item.uniqueId === uniqueId
          ? { ...item, ...updates }
          : item
      )
    )
  }

  // TOTAL REAL
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
        updateCartItem,
        getTotalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
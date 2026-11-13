import { createContext, useContext, useState } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const isWishlisted = (id) => wishlist.includes(id)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <StoreContext.Provider
      value={{ cart, wishlist, addToCart, toggleWishlist, isWishlisted, cartCount }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}
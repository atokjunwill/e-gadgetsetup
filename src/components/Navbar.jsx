import { Search, Heart, ShoppingCart } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { cartCount, wishlist } = useStore()
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl font-bold">
          E-Gadget<span className="text-cyan">Setup</span>
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 overflow-hidden rounded-full bg-white">
          <input
            type="text"
            placeholder="Search gadgets..."
            className="w-full px-4 py-2 text-navy outline-none"
          />
          <button
            aria-label="Search"
            className="bg-cyan px-4 text-navy hover:brightness-110"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Wishlist" className="relative">
            <Heart />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan text-xs font-bold text-navy">
                {wishlist.length}
              </span>
            )}
          </button>

          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan text-xs font-bold text-navy">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
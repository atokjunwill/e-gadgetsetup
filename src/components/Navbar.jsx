import { Search, Heart, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
        {/* Logo */}
        <a href="/" className="font-heading text-xl font-bold">
          E-Gadget<span className="text-cyan">Setup</span>
        </a>

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
          <button aria-label="Wishlist"><Heart /></button>
          <button aria-label="Cart"><ShoppingCart /></button>
        </div>
      </div>
    </header>
  )
}
import { useState } from 'react'
import { Heart, Star } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const { name, price, oldPrice, rating, reviews, image } = product
  const onSale = oldPrice !== null

  const { addToCart, toggleWishlist, isWishlisted } = useStore()
  const wished = isWishlisted(product.id)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="relative rounded-xl bg-white p-3 shadow-sm transition hover:shadow-md">
      {/* Sale badge */}
      {onSale && (
        <span className="absolute left-3 top-3 rounded-full bg-cyan px-2 py-1 text-xs font-semibold text-navy">
          SALE
        </span>
      )}

      {/* Wishlist button */}
      <button
      onClick={() => toggleWishlist(product.id)}
      aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
      className="absolute right-3 top-3 text-muted hover:text-navy"
      >
        <Heart
        size={20}
        className={wished ? 'fill-red-500 text-red-500' : ''}
        />
        </button>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={image}
          alt={name}
          className="aspect-square w-full rounded-lg object-cover"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg' }}
        />
      </Link>

      {/* Info */}
      <h3 className="mt-3 line-clamp-2 font-heading font-medium">
        <Link to={`/product/${product.id}`} className="hover:text-cyan">
          {name}
        </Link>
      </h3>

      <div className="mt-1 flex items-center gap-1 text-sm text-muted">
        <Star size={14} className="fill-cyan text-cyan" />
        {rating} ({reviews})
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-semibold">₱{price.toLocaleString()}</span>
        {onSale && (
          <span className="text-sm text-muted line-through">
            ₱{oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      <button
      onClick={handleAdd}
      className="mt-3 w-full rounded-lg bg-cyan py-2 font-semibold text-navy hover:brightness-110"
      >
        {added ? 'Added ✓' : 'Add to Cart'}
        </button>
    </div>
  )
}
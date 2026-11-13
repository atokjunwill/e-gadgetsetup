import { Heart, Star } from 'lucide-react'

export default function ProductCard({ product }) {
  const { name, price, oldPrice, rating, reviews, image } = product
  const onSale = oldPrice !== null

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
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 text-muted hover:text-navy"
      >
        <Heart size={20} />
      </button>

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="aspect-square w-full rounded-lg object-cover"
      />

      {/* Info */}
      <h3 className="mt-3 line-clamp-2 font-heading font-medium">{name}</h3>

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

      <button className="mt-3 w-full rounded-lg bg-cyan py-2 font-semibold text-navy hover:brightness-110">
        Add to Cart
      </button>
    </div>
  )
}
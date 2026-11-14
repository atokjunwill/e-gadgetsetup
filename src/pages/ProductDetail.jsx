import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Star } from 'lucide-react'
import { products } from '../data/products'
import { useStore } from '../context/StoreContext'
import ProductCard from '../components/ProductCard' 

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addToCart, toggleWishlist, isWishlisted } = useStore()

  if (!product) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <p className="mb-4 text-muted">Product not found.</p>
        <Link to="/" className="font-semibold text-navy underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const { name, category, price, oldPrice, rating, reviews, image } = product
  const onSale = oldPrice !== null
  const wished = isWishlisted(product.id)
  const related = products
    .filter((p) => p.category === category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-navy"
      >
        <ArrowLeft size={16} /> Back to shop
      </Link>

      <div className="grid gap-8 rounded-2xl bg-white p-6 md:grid-cols-2">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full rounded-xl object-cover"
        />

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            {category}
          </p>
          <h1 className="mt-1 font-heading text-3xl font-bold">{name}</h1>

          <div className="mt-2 flex items-center gap-1 text-sm text-muted">
            <Star size={16} className="fill-cyan text-cyan" />
            {rating} ({reviews} reviews)
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">₱{price.toLocaleString()}</span>
            {onSale && (
              <span className="text-lg text-muted line-through">
                ₱{oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="mt-4 text-muted">
            {product.description ??
              'Quality gadget built for your everyday setup. Official warranty and fast delivery included.'}
          </p>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 rounded-lg bg-cyan py-3 font-semibold text-navy hover:brightness-110"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Toggle wishlist"
              className="rounded-lg border border-navy/20 px-4 hover:bg-cool"
            >
              <Heart className={wished ? 'fill-red-500 text-red-500' : ''} />
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 font-heading text-2xl font-bold">
            Related <span className="text-cyan">Products</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
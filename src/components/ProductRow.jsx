import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductRow({ title, accent, products, id }) {
  const rowRef = useRef(null)

  const scroll = (direction) => {
    rowRef.current.scrollBy({ left: direction * 300, behavior: 'smooth' })
  }

  return (
    <section id={id} className="mt-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold">
          {title} <span className="text-cyan">{accent}</span>
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="rounded-full bg-white p-2 shadow-sm hover:bg-cyan"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="rounded-full bg-white p-2 shadow-sm hover:bg-cyan"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={rowRef}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-2"
      >
        {products.map((product) => (
          <div key={product.id} className="w-52 shrink-0 md:w-60">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import FeatureStrip from './components/FeatureStrip'
import CategoryGrid from './components/CategoryGrid'
import ProductRow from './components/ProductRow'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const deals = products.filter((p) => p.oldPrice !== null)
  const newArrivals = products.slice(0, 8)
  const filtered = products.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <HeroBanner />
        <FeatureStrip />
        <CategoryGrid
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {selectedCategory ? (
          <section className="mt-12">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold">
                {selectedCategory}{' '}
                <span className="text-cyan">({filtered.length})</span>
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm font-medium text-muted underline hover:text-navy"
              >
                Clear filter
              </button>
            </div>

            {filtered.length === 0 ? (
              <p className="rounded-xl bg-white p-8 text-center text-muted">
                No products in this category yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            <ProductRow id="deals" title="Today's Best" accent="Deals" products={deals} />
            <ProductRow title="New" accent="Arrivals" products={newArrivals} />
          </>
        )}
      </main>
    </>
  )
}
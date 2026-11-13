import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import FeatureStrip from './components/FeatureStrip'
import CategoryGrid from './components/CategoryGrid'
import ProductRow from './components/ProductRow'
import { products } from './data/products'

export default function App() {
  const deals = products.filter((p) => p.oldPrice !== null)
  const newArrivals = products.slice(0, 8)

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <HeroBanner />
        <FeatureStrip />
        <CategoryGrid />
        <ProductRow id="deals" title="Today's Best" accent="Deals" products={deals} />
        <ProductRow title="New" accent="Arrivals" products={newArrivals} />
      </main>
    </>
  )
}
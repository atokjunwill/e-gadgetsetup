import { ArrowRight } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-navy">
      <img
        src="/images/hero/hero-01.jpg"
        alt="Modern gadget desk setup"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan">
          New Season Deals
        </p>
        <h1 className="max-w-xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
          Technology Meets <span className="text-cyan">Innovation</span>
        </h1>
        <p className="mt-4 max-w-md text-white/80">
          Explore the latest gadgets and accessories for your perfect setup.
        </p>
        <a
          href="#deals"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-navy hover:brightness-110"
        >
          Shop Now <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
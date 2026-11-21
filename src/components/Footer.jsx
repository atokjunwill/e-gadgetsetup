import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-bold">
            E-Gadget<span className="text-cyan">Setup</span>
          </p>
          <p className="mt-3 text-sm text-white/70">
            Technology meets innovation. Gadgets and accessories for your perfect setup.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link to="/?category=Smartphones" className="hover:text-cyan">Smartphones</Link></li>
            <li><Link to="/?category=Laptops" className="hover:text-cyan">Laptops</Link></li>
            <li><Link to="/?category=Gaming" className="hover:text-cyan">Gaming</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold">Help</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Shipping info</li>
            <li>Returns</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold">Newsletter</h3>
          <p className="mt-3 text-sm text-white/70">Get deals in your inbox.</p>
          <div className="mt-3 flex overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="w-full px-4 py-2 text-sm text-navy outline-none"
            />
            <button className="bg-cyan px-4 text-sm font-semibold text-navy">Join</button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} E-GadgetSetup. Demo store for portfolio purposes.
      </div>
    </footer>
  )
}
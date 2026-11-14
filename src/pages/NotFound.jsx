import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rounded-2xl bg-white p-12 text-center">
      <p className="font-heading text-6xl font-bold text-cyan">404</p>
      <p className="mt-2 text-muted">That page doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white hover:brightness-110"
      >
        Go home
      </Link>
    </div>
  )
}
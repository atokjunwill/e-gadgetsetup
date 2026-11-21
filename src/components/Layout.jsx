import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
      <Outlet />
    </main>
    <Footer />
  </div>
)
}
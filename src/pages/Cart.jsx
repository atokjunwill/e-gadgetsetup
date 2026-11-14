import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart, cartTotal } = useStore()
  const [ordered, setOrdered] = useState(false)

  const handleCheckout = () => {
    clearCart()
    setOrdered(true)
  }

  if (ordered) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center">
        <h1 className="font-heading text-3xl font-bold">
          Order <span className="text-cyan">Placed!</span>
        </h1>
        <p className="mt-2 text-muted">
          This is a demo store, so no payment was taken. Thanks for testing!
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-cyan px-6 py-3 font-semibold text-navy hover:brightness-110"
        >
          Continue shopping
        </Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center">
        <h1 className="font-heading text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted">Add a gadget to get started.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-cyan px-6 py-3 font-semibold text-navy hover:brightness-110"
        >
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <>
      <h1 className="mb-6 font-heading text-3xl font-bold">
        Your <span className="text-cyan">Cart</span>
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-4 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <Link
                  to={`/product/${item.id}`}
                  className="font-heading font-medium hover:text-cyan"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-muted">
                  ₱{item.price.toLocaleString()} each
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    aria-label="Decrease quantity"
                    className="rounded-full border border-navy/20 p-1 hover:bg-cool"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center font-medium">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    aria-label="Increase quantity"
                    className="rounded-full border border-navy/20 p-1 hover:bg-cool"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ₱{(item.price * item.qty).toLocaleString()}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                  className="mt-2 text-muted hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold">Order Summary</h2>
          <div className="mt-4 flex justify-between text-muted">
            <span>Subtotal</span>
            <span>₱{cartTotal.toLocaleString()}</span>
          </div>
          <div className="mt-2 flex justify-between text-muted">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-navy/10 pt-4 text-lg font-semibold">
            <span>Total</span>
            <span>₱{cartTotal.toLocaleString()}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-lg bg-cyan py-3 font-semibold text-navy hover:brightness-110"
          >
            Checkout
          </button>
        </aside>
      </div>
    </>
  )
}
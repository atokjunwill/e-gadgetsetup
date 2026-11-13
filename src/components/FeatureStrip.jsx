import { Truck, RefreshCw, ShieldCheck, Headset } from 'lucide-react'

const features = [
  { icon: Truck, title: "Fast Delivery", text: "Nationwide shipping" },
  { icon: RefreshCw, title: "Easy Returns", text: "7-day return policy" },
  { icon: ShieldCheck, title: "Official Warranty", text: "100% genuine items" },
  { icon: Headset, title: "24/7 Support", text: "We're here to help" },
]

export default function FeatureStrip() {
  return (
    <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      {features.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
        >
          <Icon className="shrink-0 text-cyan" size={28} />
          <div>
            <p className="font-heading text-sm font-semibold">{title}</p>
            <p className="text-xs text-muted">{text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
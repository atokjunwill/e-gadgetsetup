import { categories } from '../data/categories'

export default function CategoryGrid() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 font-heading text-2xl font-bold">
        Featured <span className="text-cyan">Categories</span>
      </h2>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-10">
        {categories.map(({ name, icon: Icon }) => (
          <a
            key={name}
            href="#"
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:bg-navy group-hover:text-cyan">
              <Icon size={32} />
            </div>
            <span className="text-center text-xs font-medium md:text-sm">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
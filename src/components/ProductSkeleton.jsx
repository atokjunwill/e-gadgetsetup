export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-white p-3">
      <div className="aspect-square rounded-lg bg-gray-200" />
      <div className="mt-3 h-4 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
      <div className="mt-4 h-9 rounded-lg bg-gray-200" />
    </div>
  )
}
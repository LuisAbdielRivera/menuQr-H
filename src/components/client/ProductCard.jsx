export default function ProductCard({ product }) {
  return (
    <div className='rounded-2xl bg-neutral-900 p-3 text-white'>
      <img
        src={product.image}
        className='h-40 w-full rounded-xl object-cover'
      />

      <h3 className='mt-3 text-xl font-bold'>
        {product.name}
      </h3>

      <p className='mt-1 text-neutral-400'>
        {product.desc}
      </p>

      <div className='mt-4 flex items-center justify-between'>
        <span className='text-yellow-400 font-black'>
          {product.price}
        </span>

        <button className='rounded-xl bg-yellow-400 px-4 py-2 text-black font-bold'>
          Agregar
        </button>
      </div>
    </div>
  )
}
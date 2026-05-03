import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className='overflow-hidden rounded-[2rem] bg-neutral-900 shadow-lg'>

      <img
        src={product.image}
        alt={product.name}
        className='h-56 w-full object-cover'
      />

      <div className='p-5'>

        <div className='flex items-start justify-between gap-4'>

          <div>

            <h2 className='text-2xl font-black text-white'>
              {product.name}
            </h2>

            <p className='mt-2 text-sm text-neutral-400'>
              {product.desc}
            </p>

          </div>

          <span className='text-xl font-black text-yellow-400'>
            {product.price}
          </span>

        </div>

        <div className='mt-6'>

          <Link to='/producto'>

            <button className='w-full rounded-2xl bg-white/10 py-4 font-bold text-white transition hover:bg-white/20'>
              Ver detalle
            </button>

          </Link>

        </div>

      </div>

    </div>
  )
}
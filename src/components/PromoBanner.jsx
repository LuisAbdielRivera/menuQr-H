export default function PromoBanner() {
  return (
    <div className='mt-6 overflow-hidden rounded-[2rem] bg-yellow-400 p-5 text-black'>

      <div className='flex items-center justify-between gap-5'>

        <div>

          <p className='text-sm font-bold uppercase tracking-wide'>
            Promoción
          </p>

          <h2 className='mt-2 text-4xl font-black'>
            2x1
          </h2>

          <p className='mt-2 font-medium'>
            En hamburguesas clásicas
          </p>

        </div>

        <img
          src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop'
          alt='Promo'
          className='h-28 w-28 rounded-2xl object-cover'
        />

      </div>

    </div>
  )
}
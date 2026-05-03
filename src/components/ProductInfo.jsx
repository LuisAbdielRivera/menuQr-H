export default function ProductInfo() {
  return (
    <div className='mt-6'>

      <div className='flex items-start justify-between gap-4'>

        <div>

          <p className='text-sm font-semibold uppercase tracking-wide text-yellow-400'>
            Hamburguesa Premium
          </p>

          <h1 className='mt-2 text-5xl font-black text-white'>
            BBQ Bacon
          </h1>

        </div>

        <span className='text-3xl font-black text-yellow-400'>
          $119
        </span>

      </div>

      <p className='mt-5 text-lg leading-relaxed text-neutral-300'>
        Deliciosa hamburguesa preparada con carne de res,
        queso cheddar, tocino crujiente y salsa BBQ especial.
      </p>

    </div>
  )
}
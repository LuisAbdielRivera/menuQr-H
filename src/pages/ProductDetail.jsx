import MenuHeader from '../components/MenuHeader'
import ProductImage from '../components/ProductImage'
import ProductInfo from '../components/ProductInfo'
import IngredientSelector from '../components/IngredientSelector'

export default function ProductDetail() {
  return (
    <div className='min-h-screen bg-[#0B0B0B]'>

      <MenuHeader title='DETALLE' />

      <main className='p-5'>

        <ProductImage />

        <ProductInfo />

        <div className='mt-6 rounded-[2rem] bg-neutral-900 p-5'>

          <h2 className='text-xl font-black text-white'>
            Información
          </h2>

          <p className='mt-3 leading-relaxed text-neutral-400'>
            Todos los ingredientes están incluidos en el precio.

            <br />
            <br />

            Puedes quitar ingredientes sin costo adicional.
          </p>

        </div>

        <IngredientSelector />

        <div className='mt-6 rounded-[2rem] bg-neutral-900 p-5'>

          <h2 className='text-xl font-black text-white'>
            Notas adicionales
          </h2>

          <textarea
            placeholder='Ejemplo: sin cebolla, extra salsa...'
            className='mt-4 h-32 w-full rounded-2xl border border-white/10 bg-neutral-800 p-4 text-white outline-none placeholder:text-neutral-500'
          />

        </div>

      </main>

    </div>
  )
}
import MenuHeader from '../components/MenuHeader'
import CategoryTabs from '../components/CategoryTabs'
import PromoBanner from '../components/PromoBanner'
import ProductCard from '../components/ProductCard'

import products from '../data/products'

export default function Menu() {
  return (
    <div className='min-h-screen bg-[#0B0B0B]'>

      <MenuHeader title='MENÚ' />

      <main className='p-5'>

        <CategoryTabs />

        <PromoBanner />

        <div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </main>

    </div>
  )
}
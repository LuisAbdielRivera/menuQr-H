import { Link } from 'react-router-dom'

export default function Menu() {

  const products = [
    {
      id: 1,
      name: 'Clásica',
      desc: 'Carne de res, queso cheddar y vegetales frescos.',
      price: '$99',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 2,
      name: 'Double Smash',
      desc: 'Doble carne smash y salsa especial.',
      price: '$129',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 3,
      name: 'BBQ Bacon',
      desc: 'Tocino crujiente y salsa BBQ.',
      price: '$119',
      image:
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 4,
      name: 'Chicken Burger',
      desc: 'Pechuga crispy y aderezo ranch.',
      price: '$109',
      image:
        'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const categories = [
    'Todas',
    'Hamburguesas',
    'Papas',
    'Bebidas',
    'Extras',
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">

        <div className="flex items-center justify-between px-5 py-4">

          <Link to="/">

            <button className="rounded-xl bg-white/10 px-4 py-2">
              ←
            </button>

          </Link>

          <h1 className="text-2xl font-black text-yellow-400">
            MENÚ
          </h1>

          <button className="rounded-xl bg-white/10 px-4 py-2">
            🛒
          </button>

        </div>

      </header>

      {/* CONTENIDO */}
      <main className="p-5">

        {/* BUSCADOR */}
        <div className="rounded-2xl bg-neutral-900 p-4">

          <input
            type="text"
            placeholder="Buscar hamburguesa..."
            className="w-full bg-transparent text-white outline-none placeholder:text-neutral-500"
          />

        </div>

        {/* CATEGORIAS */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

          {categories.map((category, index) => (

            <button
              key={category}
              className={`
                whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition

                ${index === 0
                  ? 'bg-yellow-400 text-black'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }
              `}
            >

              {category}

            </button>

          ))}

        </div>

        {/* PROMO */}
        <div className="mt-6 overflow-hidden rounded-[2rem] bg-yellow-400 p-5 text-black">

          <div className="flex items-center justify-between gap-5">

            <div>

              <p className="text-sm font-bold uppercase tracking-wide">
                Promoción
              </p>

              <h2 className="mt-2 text-4xl font-black">
                2x1
              </h2>

              <p className="mt-2 font-medium">
                En hamburguesas clásicas
              </p>

            </div>

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
              alt="Promo"
              className="h-28 w-28 rounded-2xl object-cover"
            />

          </div>

        </div>

        {/* PRODUCTOS */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-[2rem] bg-neutral-900 shadow-lg"
            >

              {/* IMAGEN */}
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              {/* INFO */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h2 className="text-2xl font-black">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm text-neutral-400">
                      {product.desc}
                    </p>

                  </div>

                  <span className="text-xl font-black text-yellow-400">
                    {product.price}
                  </span>

                </div>

                {/* BOTONES */}
                <div className="mt-6 flex gap-3">

                  <Link
                    to="/producto"
                    className="flex-1"
                  >

                    <button className="w-full rounded-2xl bg-white/10 py-3 font-semibold transition hover:bg-white/20">

                      Ver detalle

                    </button>

                  </Link>

                  <button className="rounded-2xl bg-yellow-400 px-5 py-3 font-black text-black transition hover:scale-105">

                    +

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>

      {/* NAVBAR INFERIOR */}
      <nav className="sticky bottom-0 border-t border-white/10 bg-black/80 backdrop-blur-md">

        <div className="flex items-center justify-around px-5 py-4">

          <button className="flex flex-col items-center text-yellow-400">
            <span className="text-2xl">🍔</span>
            <span className="mt-1 text-xs">
              Menú
            </span>
          </button>

          <button className="flex flex-col items-center text-neutral-400">
            <span className="text-2xl">🛒</span>
            <span className="mt-1 text-xs">
              Pedido
            </span>
          </button>

          <button className="flex flex-col items-center text-neutral-400">
            <span className="text-2xl">📍</span>
            <span className="mt-1 text-xs">
              Sucursal
            </span>
          </button>

        </div>

      </nav>

    </div>
  )
}
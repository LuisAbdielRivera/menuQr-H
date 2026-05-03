export default function Products() {

  const products = [
    {
      id: 1,
      name: 'Clásica',
      category: 'Hamburguesas',
      price: '$99',
      status: 'Activo',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 2,
      name: 'Double Smash',
      category: 'Hamburguesas',
      price: '$129',
      status: 'Activo',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 3,
      name: 'BBQ Bacon',
      category: 'Hamburguesas',
      price: '$119',
      status: 'Agotado',
      image:
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop',
    },

    {
      id: 4,
      name: 'Papas Francesas',
      category: 'Papas',
      price: '$59',
      status: 'Activo',
      image:
        'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-100">

      {/* CONTENEDOR */}
      <div className="grid min-h-screen grid-cols-[260px_1fr]">

        {/* SIDEBAR */}
        <aside className="bg-[#0B0B0B] p-6 text-white">

          {/* LOGO */}
          <div>

            <h1 className="text-3xl font-black text-yellow-400">
              BURGER SPOT
            </h1>

            <p className="mt-2 text-sm text-neutral-400">
              Panel Administrador
            </p>

          </div>

          {/* MENU */}
          <nav className="mt-10 space-y-3">

            <button className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-800">
              Dashboard
            </button>

            <button className="w-full rounded-2xl bg-yellow-400 px-4 py-3 text-left font-bold text-black">
              Productos
            </button>

            <button className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-800">
              Categorías
            </button>

            <button className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-800">
              Pedidos
            </button>

            <button className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-800">
              Mesas
            </button>

            <button className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-800">
              Configuración
            </button>

          </nav>

          {/* FOOTER */}
          <div className="mt-auto pt-10">

            <button className="w-full rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600">
              Cerrar sesión
            </button>

          </div>

        </aside>

        <main className="p-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <h1 className="text-4xl font-black text-neutral-900">
                Productos
              </h1>

              <p className="mt-2 text-neutral-500">
                Administra el menú del restaurante
              </p>

            </div>

            <button className="rounded-2xl bg-yellow-400 px-6 py-4 font-black text-black transition hover:scale-105">

              + Nuevo producto

            </button>

          </div>

          <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">

            <input
              type="text"
              placeholder="Buscar producto..."
              className="w-full rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4 border-b border-neutral-200 px-6 py-5 text-sm font-bold uppercase tracking-wide text-neutral-500">

              <div>
                Producto
              </div>

              <div>
                Categoría
              </div>

              <div>
                Precio
              </div>

              <div>
                Estado
              </div>

              <div>
                Acciones
              </div>

            </div>

            <div>

              {products.map((product) => (

                <div
                  key={product.id}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-neutral-100 px-6 py-5 transition hover:bg-neutral-50"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />

                    <div>

                      <h2 className="font-bold text-neutral-900">
                        {product.name}
                      </h2>

                      <p className="text-sm text-neutral-500">
                        ID #{product.id}
                      </p>

                    </div>

                  </div>

                  <div className="font-medium text-neutral-700">

                    {product.category}

                  </div>

                  <div className="text-lg font-black text-neutral-900">

                    {product.price}

                  </div>

                  <div>

                    <span
                      className={`
                        rounded-full px-4 py-2 text-sm font-bold

                        ${product.status === 'Activo'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                        }
                      `}
                    >

                      {product.status}

                    </span>

                  </div>

                  <div className="flex gap-3">

                    <button className="rounded-xl bg-neutral-200 px-4 py-2 text-sm font-bold text-neutral-800 transition hover:bg-neutral-300">

                      Editar

                    </button>

                    <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600">

                      Eliminar

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}
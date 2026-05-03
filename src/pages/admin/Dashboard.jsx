export default function Dashboard() {

  const stats = [
    {
      title: 'Ventas del día',
      value: '$2,450',
    },
    {
      title: 'Pedidos del día',
      value: '58',
    },
    {
      title: 'Productos',
      value: '24',
    },
    {
      title: 'Mesas activas',
      value: '8',
    },
  ]

  const recentOrders = [
    {
      id: '#1058',
      table: 'Mesa 4',
      total: '$189',
      status: 'Completado',
    },
    {
      id: '#1057',
      table: 'Mesa 2',
      total: '$129',
      status: 'En preparación',
    },
    {
      id: '#1056',
      table: 'Mesa 5',
      total: '$249',
      status: 'Pendiente',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-100">

      {/* CONTENEDOR PRINCIPAL */}
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

            <button className="w-full rounded-2xl bg-yellow-400 px-4 py-3 text-left font-bold text-black">
              Dashboard
            </button>

            <button className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-left text-neutral-300 transition hover:bg-neutral-800">
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

        {/* CONTENIDO */}
        <main className="p-8">

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-black text-neutral-900">
                Dashboard
              </h1>

              <p className="mt-2 text-neutral-500">
                Resumen general del negocio
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-neutral-500">
                Hoy
              </p>

              <h3 className="font-bold text-neutral-900">
                20 Mayo 2026
              </h3>
            </div>

          </div>

          {/* STATS */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >

                <p className="text-sm text-neutral-500">
                  {item.title}
                </p>

                <h2 className="mt-4 text-4xl font-black text-neutral-900">
                  {item.value}
                </h2>

              </div>

            ))}

          </div>

          {/* CONTENIDO INFERIOR */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {/* PEDIDOS RECIENTES */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-black text-neutral-900">
                  Pedidos recientes
                </h2>

                <button className="text-sm font-semibold text-yellow-500">
                  Ver todos
                </button>

              </div>

              <div className="mt-6 space-y-4">

                {recentOrders.map((order) => (

                  <div
                    key={order.id}
                    className="flex items-center justify-between rounded-2xl bg-neutral-100 p-4"
                  >

                    <div>

                      <h3 className="font-bold text-neutral-900">
                        {order.id}
                      </h3>

                      <p className="text-sm text-neutral-500">
                        {order.table}
                      </p>

                    </div>

                    <div>

                      <p className="font-bold text-neutral-900">
                        {order.total}
                      </p>

                    </div>

                    <div>

                      <span
                        className={`
                          rounded-full px-4 py-2 text-sm font-semibold

                          ${order.status === 'Completado'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'En preparación'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }
                        `}
                      >
                        {order.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* PRODUCTOS MÁS VENDIDOS */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-black text-neutral-900">
                  Productos más vendidos
                </h2>

              </div>

              <div className="mt-6 space-y-5">

                {[
                  'Clásica',
                  'Double Smash',
                  'BBQ Bacon',
                  'Papas Francesa',
                ].map((product, index) => (

                  <div
                    key={product}
                    className="flex items-center justify-between rounded-2xl bg-neutral-100 p-4"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-xl">
                        🍔
                      </div>

                      <div>

                        <h3 className="font-bold text-neutral-900">
                          {product}
                        </h3>

                        <p className="text-sm text-neutral-500">
                          #{index + 1} más vendido
                        </p>

                      </div>

                    </div>

                    <div>

                      <span className="text-lg font-black text-neutral-900">
                        {32 - index * 5}
                      </span>

                      <p className="text-sm text-neutral-500">
                        ventas
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}
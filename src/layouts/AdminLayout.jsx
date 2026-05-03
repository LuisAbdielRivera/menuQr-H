import { Outlet, Link, useLocation } from 'react-router-dom'

export default function AdminLayout() {

  const location = useLocation()

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: '📊',
    },
    {
      name: 'Productos',
      path: '/admin/productos',
      icon: '🍔',
    },
    {
      name: 'Categorías',
      path: '/admin/categorias',
      icon: '📂',
    },
    {
      name: 'Pedidos',
      path: '/admin/pedidos',
      icon: '🧾',
    },
    {
      name: 'Mesas',
      path: '/admin/mesas',
      icon: '🪑',
    },
    {
      name: 'Configuración',
      path: '/admin/configuracion',
      icon: '⚙️',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-100">

      <div className="grid min-h-screen grid-cols-[260px_1fr]">

        {/* SIDEBAR */}
        <aside className="flex flex-col bg-[#0B0B0B] p-6 text-white">

          {/* LOGO */}
          <div>

            <Link to="/admin">

              <h1 className="text-3xl font-black tracking-wide text-yellow-400">
                BURGER SPOT
              </h1>

            </Link>

            <p className="mt-2 text-sm text-neutral-400">
              Panel Administrador
            </p>

          </div>

          {/* MENU */}
          <nav className="mt-10 flex-1 space-y-3">

            {menuItems.map((item) => (

              <Link
                key={item.name}
                to={item.path}
              >

                <button
                  className={`
                    flex w-full items-center gap-3 rounded-2xl px-4 py-4 text-left font-semibold transition

                    ${location.pathname === item.path
                      ? 'bg-yellow-400 text-black'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                    }
                  `}
                >

                  <span className="text-xl">
                    {item.icon}
                  </span>

                  {item.name}

                </button>

              </Link>

            ))}

          </nav>

          {/* FOOTER */}
          <div className="mt-8 border-t border-white/10 pt-6">

            <div className="mb-5 rounded-2xl bg-neutral-900 p-4">

              <p className="text-sm text-neutral-400">
                Usuario
              </p>

              <h3 className="mt-1 font-bold">
                Administrador
              </h3>

            </div>

            <button className="w-full rounded-2xl bg-red-500 px-4 py-4 font-bold text-white transition hover:bg-red-600">

              Cerrar sesión

            </button>

          </div>

        </aside>

        {/* CONTENIDO */}
        <main className="flex flex-col">

          {/* TOPBAR */}
          <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white px-8 py-5">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-black text-neutral-900">
                  Panel Administrativo
                </h2>

                <p className="mt-1 text-sm text-neutral-500">
                  Gestiona productos, pedidos y ventas
                </p>

              </div>

              {/* ACCIONES */}
              <div className="flex items-center gap-4">

                {/* BUSCADOR */}
                <div className="hidden rounded-2xl border border-neutral-200 bg-neutral-100 px-4 py-3 md:flex">

                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                  />

                </div>

                {/* NOTIFICACIONES */}
                <button className="rounded-2xl bg-neutral-100 px-4 py-3 transition hover:bg-neutral-200">

                  🔔

                </button>

              </div>

            </div>

          </header>

          {/* PAGINAS */}
          <div className="flex-1 p-8">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  )
}
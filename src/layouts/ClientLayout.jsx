import { Outlet, Link, useLocation } from 'react-router-dom'

export default function ClientLayout() {

  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">

        <div className="flex items-center justify-between px-5 py-4">

          {/* LOGO */}
          <Link to="/">

            <h1 className="text-2xl font-black tracking-wide text-yellow-400">
              BURGER SPOT
            </h1>

          </Link>

          {/* ACCIONES */}
          <div className="flex items-center gap-3">

            <button className="rounded-xl bg-white/10 px-4 py-2 transition hover:bg-white/20">
              🔍
            </button>

            <button className="rounded-xl bg-white/10 px-4 py-2 transition hover:bg-white/20">
              🛒
            </button>

          </div>

        </div>

      </header>

      {/* CONTENIDO */}
      <main className="pb-28">

        <Outlet />

      </main>

      {/* NAVBAR INFERIOR */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-md">

        <div className="flex items-center justify-around px-5 py-4">

          {/* HOME */}
          <Link
            to="/"
            className={`
              flex flex-col items-center transition

              ${location.pathname === '/'
                ? 'text-yellow-400'
                : 'text-neutral-400'
              }
            `}
          >

            <span className="text-2xl">
              🏠
            </span>

            <span className="mt-1 text-xs font-medium">
              Inicio
            </span>

          </Link>

          {/* MENU */}
          <Link
            to="/menu"
            className={`
              flex flex-col items-center transition

              ${location.pathname === '/menu'
                ? 'text-yellow-400'
                : 'text-neutral-400'
              }
            `}
          >

            <span className="text-2xl">
              🍔
            </span>

            <span className="mt-1 text-xs font-medium">
              Menú
            </span>

          </Link>

          {/* PEDIDO */}
          <button className="flex flex-col items-center text-neutral-400 transition hover:text-yellow-400">

            <span className="text-2xl">
              🛒
            </span>

            <span className="mt-1 text-xs font-medium">
              Pedido
            </span>

          </button>

          {/* SUCURSAL */}
          <button className="flex flex-col items-center text-neutral-400 transition hover:text-yellow-400">

            <span className="text-2xl">
              📍
            </span>

            <span className="mt-1 text-xs font-medium">
              Sucursal
            </span>

          </button>

        </div>

      </nav>

    </div>
  )
}
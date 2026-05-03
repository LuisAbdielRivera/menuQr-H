import { Link } from 'react-router-dom'

export default function Home() {

  const categories = [
    {
      name: 'Hamburguesas',
      icon: '🍔',
    },
    {
      name: 'Papas',
      icon: '🍟',
    },
    {
      name: 'Bebidas',
      icon: '🥤',
    },
    {
      name: 'Extras',
      icon: '➕',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">

        {/* IMAGEN FONDO */}
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop"
          alt="Hamburguesa"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-1 flex-col p-6">

          {/* HEADER */}
          <header className="flex items-center justify-between">

            <button className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              ☰
            </button>

            <h1 className="text-2xl font-black tracking-wide text-yellow-400">
              BURGER SPOT
            </h1>

            <button className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
              🛒
            </button>

          </header>

          {/* HERO TEXT */}
          <div className="mt-20">

            <p className="text-lg font-semibold text-yellow-400">
              Bienvenido
            </p>

            <h2 className="mt-3 text-5xl font-black leading-tight">

              LAS MEJORES

              <span className="block text-yellow-400">
                HAMBURGUESAS
              </span>

            </h2>

            <p className="mt-5 max-w-md text-lg text-neutral-300">
              Hamburguesas hechas con ingredientes frescos,
              carne de calidad y sabor increíble.
            </p>

            {/* BOTON */}
            <Link to="/menu">

              <button className="mt-8 rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black text-black transition hover:scale-105">

                VER MENÚ

              </button>

            </Link>

          </div>

          {/* CATEGORIAS */}
          <div className="mt-auto">

            <div className="rounded-[2rem] bg-black/40 p-5 backdrop-blur-md">

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-bold">
                  Categorías
                </h3>

                <button className="text-sm text-yellow-400">
                  Ver todas
                </button>

              </div>

              <div className="mt-5 grid grid-cols-4 gap-4">

                {categories.map((category) => (

                  <button
                    key={category.name}
                    className="flex flex-col items-center rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"
                  >

                    <span className="text-3xl">
                      {category.icon}
                    </span>

                    <span className="mt-2 text-sm font-medium text-neutral-200">
                      {category.name}
                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* PROMO */}
            <div className="mt-6 overflow-hidden rounded-[2rem] bg-yellow-400 p-5 text-black">

              <div className="flex items-center justify-between gap-5">

                <div>

                  <p className="text-sm font-bold uppercase tracking-wide">
                    Combo especial
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    $149
                  </h3>

                  <p className="mt-2 font-medium">
                    Hamburguesa + Papas + Bebida
                  </p>

                </div>

                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
                  alt="Combo"
                  className="h-28 w-28 rounded-2xl object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

import { Link } from 'react-router-dom'

export default function ProductDetail() {

  const ingredients = [
    'Lechuga',
    'Tomate',
    'Cebolla',
    'Pepinillos',
    'Catsup',
    'Mostaza',
    'Mayonesa',
    'Jalapeños',
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">

        <div className="flex items-center justify-between px-5 py-4">

          <Link to="/menu">

            <button className="rounded-xl bg-white/10 px-4 py-2">
              ←
            </button>

          </Link>

          <h1 className="text-xl font-black text-yellow-400">
            DETALLE
          </h1>

          <button className="rounded-xl bg-white/10 px-4 py-2">
            🛒
          </button>

        </div>

      </header>

      {/* CONTENIDO */}
      <main className="p-5">

        {/* IMAGEN */}
        <div className="overflow-hidden rounded-[2rem]">

          <img
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop"
            alt="Hamburguesa"
            className="h-[320px] w-full object-cover"
          />

        </div>

        {/* INFO */}
        <div className="mt-6">

          <div className="flex items-start justify-between gap-4">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
                Hamburguesa Premium
              </p>

              <h1 className="mt-2 text-4xl font-black">
                BBQ Bacon
              </h1>

            </div>

            <span className="text-3xl font-black text-yellow-400">
              $119
            </span>

          </div>

          <p className="mt-5 text-lg leading-relaxed text-neutral-300">
            Deliciosa hamburguesa preparada con carne de res,
            queso cheddar, tocino crujiente y salsa BBQ especial.
          </p>

        </div>

        {/* INFO PERSONALIZACIÓN */}
        <div className="mt-6 rounded-[2rem] bg-neutral-900 p-5">

          <h2 className="text-xl font-black">
            Información
          </h2>

          <p className="mt-3 leading-relaxed text-neutral-400">

            Todos los ingredientes están incluidos en el precio.

            <br />
            <br />

            Puedes quitar ingredientes sin costo adicional.

          </p>

        </div>

        {/* INGREDIENTES */}
        <div className="mt-6 rounded-[2rem] bg-neutral-900 p-5">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-black">
              Personaliza tu hamburguesa
            </h2>

            <span className="text-sm text-neutral-400">
              Opcional
            </span>

          </div>

          <div className="mt-5 flex flex-wrap gap-3">

            {ingredients.map((ingredient) => (

              <label
                key={ingredient}
                className="flex items-center gap-3 rounded-full bg-neutral-800 px-5 py-3 text-sm transition hover:bg-neutral-700"
              >

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 accent-yellow-400"
                />

                {ingredient}

              </label>

            ))}

          </div>

        </div>

        {/* CANTIDAD */}
        <div className="mt-6 flex items-center gap-4">

          <div className="flex items-center gap-5 rounded-2xl bg-neutral-900 px-6 py-4">

            <button className="text-2xl font-bold">
              -
            </button>

            <span className="text-xl font-black">
              1
            </span>

            <button className="text-2xl font-bold">
              +
            </button>

          </div>

          <div className="flex-1 rounded-2xl bg-yellow-400 px-5 py-4 text-black">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold">
                  Total
                </p>

                <h2 className="text-2xl font-black">
                  $119
                </h2>

              </div>

              <button className="rounded-xl bg-black px-6 py-3 font-black text-white transition hover:scale-105">

                AGREGAR

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}
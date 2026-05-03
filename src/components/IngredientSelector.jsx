const ingredients = [
  'Cebolla',
  'Tomate',
  'Pepinillos',
  'Jalapeños',
  'Mostaza',
  'Catsup',
]

export default function IngredientSelector() {

  return (
    <div className='mt-6 rounded-[2rem] bg-neutral-900 p-5'>

      <div className='flex items-center justify-between'>

        <h2 className='text-xl font-black text-white'>
          Personaliza tu hamburguesa
        </h2>

        <span className='text-sm text-neutral-400'>
          Opcional
        </span>

      </div>

      {/* MENSAJE UX */}
      <p className='mt-3 text-sm leading-relaxed text-neutral-400'>

        Selecciona únicamente los ingredientes que deseas quitar.

      </p>

      {/* CHECKS */}
      <div className='mt-5 flex flex-wrap gap-3'>

        {ingredients.map((ingredient) => (

          <label
            key={ingredient}
            className='flex items-center gap-3 rounded-full bg-neutral-800 px-5 py-3 text-sm text-white transition hover:bg-neutral-700'
          >

            <input
              type='checkbox'
              className='h-4 w-4 accent-yellow-400'
            />

            {`Sin ${ingredient}`}

          </label>

        ))}

      </div>

    </div>
  )
}
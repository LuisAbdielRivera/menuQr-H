import { useState } from 'react'

export default function CustomizePanel({ onChange }) {

  const options = [
    'Sin cebolla',
    'Sin tomate',
    'Sin pepinillos',
    'Sin jalapeños',
    'Sin mostaza',
    'Sin catsup'
  ]

  const [selected, setSelected] = useState([])

  const toggle = (opt) => {
    let updated

    if (selected.includes(opt)) {
      updated = selected.filter(o => o !== opt)
    } else {
      updated = [...selected, opt]
    }

    setSelected(updated)
    onChange(updated)
  }

  return (
    <div className="mt-4 rounded-2xl bg-neutral-900 p-5">

      <div className="flex justify-between">
        <h2 className="text-lg font-bold">
          Personaliza tu hamburguesa
        </h2>

        <span className="text-sm text-neutral-400">
          Opcional
        </span>
      </div>

      <p className="mt-2 text-sm text-neutral-400">
        Selecciona lo que deseas quitar
      </p>

      <div className="mt-4 flex flex-wrap gap-3">

        {options.map(opt => (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={`
              px-4 py-2 rounded-full text-sm transition

              ${selected.includes(opt)
                ? 'bg-yellow-400 text-black'
                : 'bg-neutral-800 text-white'
              }
            `}
          >
            {opt}
          </button>
        ))}

      </div>

    </div>
  )
}
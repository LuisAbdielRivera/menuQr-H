export default function IngredientSelector() {

  const ingredients = [
    'Lechuga',
    'Tomate',
    'Cebolla',
    'Pepinillos',
    'Catsup',
    'Mostaza',
    'Mayonesa',
    'Jalapeños'
  ]

  return (
    <div className='flex flex-wrap gap-2'>
      {ingredients.map((item) => (
        <label
          key={item}
          className='flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-white'
        >
          <input type='checkbox' defaultChecked />
          {item}
        </label>
      ))}
    </div>
  )
}
import categories from '../data/categories'

export default function CategoryTabs() {
  return (
    <div className='mt-5 flex gap-3 overflow-x-auto pb-2'>

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
  )
}
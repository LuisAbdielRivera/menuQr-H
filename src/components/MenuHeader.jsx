import { useNavigate } from 'react-router-dom'

export default function MenuHeader({ title }) {

  const navigate = useNavigate()

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md'>

      <div className='flex items-center justify-between px-5 py-5'>

        {/* BOTON ATRAS */}
        <button
          onClick={() => navigate(-1)}
          className='rounded-2xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/20'
        >

          ←

        </button>

        {/* TITULO */}
        <h1 className='text-3xl font-black text-yellow-400'>
          {title}
        </h1>

        {/* ESPACIO */}
        <div className='w-[52px]' />

      </div>

    </header>
  )
}
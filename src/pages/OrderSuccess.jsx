import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSuccess() {
  const navigate = useNavigate()
  const code = useMemo(() => Math.floor(1000 + Math.random() * 9000), [])

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-5 space-y-6">
      {/* ÍCONO DE ÉXITO */}
      <div className="text-6xl">✓</div>

      {/* MENSAJE PRINCIPAL */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-yellow-400">
          ¡Pedido Recibido!
        </h1>
        <p className="text-neutral-400 text-sm">
          Tu pedido ha llegado al encargado
        </p>
      </div>

      {/* ALERTA IMPORTANTE */}
      <div className="w-full bg-blue-500/20 border border-blue-400/50 rounded-2xl p-4 space-y-2">
        <p className="text-xs text-blue-400 uppercase tracking-wider font-bold">
          ⓘ Importante
        </p>
        <p className="text-sm text-blue-300">
          Tu pedido se preparará cuando presentes este código al encargado. 
          <span className="block mt-2 font-bold">Te recomendamos tomar una captura de pantalla para evitar problemas.</span>
        </p>
      </div>

      {/* CÓDIGO DESTACADO */}
      <div className="w-full">
        <p className="text-xs text-neutral-500 uppercase tracking-wider text-center mb-3">
          Tu código de pedido
        </p>
        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400/50 rounded-2xl p-6 text-center">
          <p className="text-7xl font-black text-yellow-400 tracking-widest">
            {code}
          </p>
        </div>
      </div>

      {/* INSTRUCCIONES */}
      <div className="w-full space-y-3 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <p className="text-sm text-neutral-300">
            <span className="text-yellow-400 font-bold">Paso 1:</span> Guarda este código
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <p className="text-sm text-neutral-300">
            <span className="text-yellow-400 font-bold">Paso 2:</span> Acércate al mostrador
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <p className="text-sm text-neutral-300">
            <span className="text-yellow-400 font-bold">Paso 3:</span> Muestra el código al encargado
          </p>
        </div>
      </div>

      {/* BOTONES */}
      <div className="w-full space-y-3 pt-4">
        <button
          onClick={() => navigate('/')}
          className="w-full py-4 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-black rounded-2xl transition-all duration-300 shadow-lg"
        >
          ← Volver al menú
        </button>
        <button
          onClick={() => {
            // Copiar código al portapapeles
            navigator.clipboard.writeText(code.toString())
            alert(`Código ${code} copiado al portapapeles`)
          }}
          className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition border border-white/20"
        >
          📋 Copiar código
        </button>
      </div>
    </div>
  )
}
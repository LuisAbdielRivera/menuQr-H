export default function OrderSuccess() {

  const code = Math.floor(1000 + Math.random() * 9000)

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-5">

      <h1 className="text-yellow-400 text-3xl font-black">
        Pedido generado
      </h1>

      <p className="mt-6 text-lg text-neutral-300">
        Tu código es:
      </p>

      <div className="mt-4 text-6xl font-black text-yellow-400">
        {code}
      </div>

      <p className="mt-6 text-center text-neutral-400">
        Pasa a caja para confirmar tu pedido
      </p>

    </div>
  )
}
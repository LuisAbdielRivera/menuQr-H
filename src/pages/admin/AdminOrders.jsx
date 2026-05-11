import orders from '../../data/admin/orders.js'

const statusStyles = {
  pendiente: 'bg-yellow-500/10 text-yellow-300',
  preparando: 'bg-blue-500/10 text-blue-300',
  entregado: 'bg-green-500/10 text-green-300',
}

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-white">Pedidos</h3>
            <p className="text-sm text-neutral-400">Lista visual de pedidos recibidos con estados y detalles.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{order.code}</p>
                <h4 className="mt-2 text-2xl font-black text-white">{order.customer}</h4>
              </div>
              <span className={`rounded-full px-3 py-2 text-sm font-semibold ${statusStyles[order.status]}`}>
                {order.status}
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]">
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-black/80 p-4">
                    <p className="font-semibold text-white">{item.quantity} × {item.name}</p>
                    <p className="text-sm text-neutral-400">{item.notes.join(', ') || 'Sin personalizaciones'}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-black/90 p-4 text-right">
                <p className="text-sm text-neutral-400">Total</p>
                <p className="mt-2 text-3xl font-black text-yellow-400">${order.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

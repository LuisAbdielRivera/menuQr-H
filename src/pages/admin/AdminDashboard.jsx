import { useMemo } from 'react'
import products from '../../data/admin/products.js'
import orders from '../../data/admin/orders.js'

const statusLabels = {
  pendiente: 'Pendiente',
  preparando: 'Preparando',
  entregado: 'Entregado',
}

export default function AdminDashboard() {
  const summary = useMemo(() => {
    const totalOrders = orders.length
    const pending = orders.filter((order) => order.status === 'pendiente').length
    const preparing = orders.filter((order) => order.status === 'preparando').length
    const delivered = orders.filter((order) => order.status === 'entregado').length
    const revenue = orders.reduce((sum, order) => sum + order.total, 0)

    return { totalOrders, pending, preparing, delivered, revenue }
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Pedidos</p>
          <p className="mt-4 text-3xl font-black text-white">{summary.totalOrders}</p>
          <p className="mt-2 text-sm text-neutral-400">Total recibido</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">En cola</p>
          <p className="mt-4 text-3xl font-black text-yellow-400">{summary.pending}</p>
          <p className="mt-2 text-sm text-neutral-400">Por atender</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Cocina</p>
          <p className="mt-4 text-3xl font-black text-yellow-400">{summary.preparing}</p>
          <p className="mt-2 text-sm text-neutral-400">En preparación</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Ingresos</p>
          <p className="mt-4 text-3xl font-black text-white">${summary.revenue}</p>
          <p className="mt-2 text-sm text-neutral-400">Valor estimado</p>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black text-white">Pedidos recientes</h3>
            <p className="text-sm text-neutral-400">Resumen visual del estado y contenido.</p>
          </div>
        </div>

        <div className="space-y-4">
          {orders.slice(0, 3).map((order) => (
            <div key={order.id} className="rounded-3xl border border-white/10 bg-black/80 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-white">{order.code}</p>
                  <p className="text-sm text-neutral-400">{order.customer}</p>
                </div>
                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-300">{statusLabels[order.status]}</span>
              </div>
              <div className="mt-3 text-sm text-neutral-400">
                {order.items.map((item, index) => (
                  <p key={index}>• {item.quantity} × {item.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

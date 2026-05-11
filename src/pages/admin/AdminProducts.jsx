import { useMemo, useState } from 'react'
import initialProducts from '../../data/admin/products.js'

const emptyForm = { id: null, name: '', desc: '', price: '', image: '' }

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts)
  const [form, setForm] = useState(emptyForm)
  const [editing, setEditing] = useState(false)

  const handleChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSave = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.desc.trim() || !form.price) return

    const payload = {
      ...form,
      price: Number(form.price),
      image: form.image || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    }

    setProducts((current) => {
      if (editing) {
        return current.map((item) => (item.id === payload.id ? payload : item))
      }
      return [...current, { ...payload, id: Date.now() }]
    })

    setForm(emptyForm)
    setEditing(false)
  }

  const handleEdit = (product) => {
    setForm({ ...product, price: String(product.price) })
    setEditing(true)
  }

  const handleDelete = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id))
    if (editing && form.id === id) {
      setForm(emptyForm)
      setEditing(false)
    }
  }

  const productCount = useMemo(() => products.length, [products])

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black text-white">Productos</h3>
            <p className="text-sm text-neutral-400">CRUD visual de hamburguesas para integrarse luego con backend.</p>
          </div>
          <span className="rounded-full bg-yellow-500/10 px-3 py-2 text-sm font-semibold text-yellow-300">{productCount} productos</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
          <h4 className="mb-4 text-lg font-black text-white">Listado de productos</h4>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-3xl border border-white/10 bg-black/80 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-bold text-white">{product.name}</p>
                    <p className="text-sm text-neutral-400">${product.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-200"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-950/90 p-5">
          <h4 className="mb-4 text-lg font-black text-white">{editing ? 'Editar producto' : 'Crear producto'}</h4>
          <form onSubmit={handleSave} className="space-y-4">
            <label className="block text-sm text-neutral-300">
              Título
              <input
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
              />
            </label>

            <label className="block text-sm text-neutral-300">
              Descripción
              <textarea
                value={form.desc}
                onChange={(e) => handleChange('desc', e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
                rows="3"
              />
            </label>

            <label className="block text-sm text-neutral-300">
              Precio
              <input
                type="number"
                value={form.price}
                onChange={(e) => handleChange('price', e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
              />
            </label>

            <label className="block text-sm text-neutral-300">
              URL de imagen
              <input
                value={form.image}
                onChange={(e) => handleChange('image', e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
                placeholder="https://..."
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-3 text-black font-black">
                {editing ? 'Guardar cambios' : 'Agregar producto'}
              </button>
              {editing && (
                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm)
                    setEditing(false)
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                >
                  Cancelar edición
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

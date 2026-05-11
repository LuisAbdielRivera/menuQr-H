import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAdminAuth()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) return
    login({ email, password })
    navigate('/admin/dashboard')
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-950/95 p-8 shadow-xl shadow-black/40">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400/80">Área privada</p>
          <h1 className="text-4xl font-black text-white">Admin Login</h1>
          <p className="text-sm text-neutral-400">Inicio de sesión visual para administrar productos y pedidos.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm text-neutral-300">
            Correo electrónico
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
              placeholder="admin@restaurante.com"
            />
          </label>

          <label className="block text-sm text-neutral-300">
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
              placeholder="********"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-3 text-black font-black"
          >
            Entrar al panel
          </button>
        </form>

        <p className="mt-6 text-xs text-neutral-500">Sin backend por ahora. Este login es de apariencia y flujo frontend para integrar más tarde autenticación real.</p>
      </div>
    </div>
  )
}

const adminOrders = [
  {
    id: 101,
    code: 'A-1024',
    customer: 'Mariana López',
    status: 'pendiente',
    total: 278,
    items: [
      { name: 'Clásica', quantity: 1, notes: ['Sin cebolla'] },
      { name: 'BBQ Bacon', quantity: 1, notes: ['Extra tocino'] },
    ],
  },
  {
    id: 102,
    code: 'A-1025',
    customer: 'Carlos Pérez',
    status: 'preparando',
    total: 119,
    items: [
      { name: 'BBQ Bacon', quantity: 1, notes: ['Salsa aparte'] },
    ],
  },
  {
    id: 103,
    code: 'A-1026',
    customer: 'Luisa García',
    status: 'entregado',
    total: 248,
    items: [
      { name: 'Doble Queso', quantity: 2, notes: ['Sin pepinillos'] },
    ],
  },
]

export default adminOrders

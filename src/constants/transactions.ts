export interface ITransaction {
  id: number
  description: string
  value: number
  date: string
  month: string
  type: string
  is_paid: boolean
  due_date?: string
}

export const transactions: ITransaction[] = [
  {
    id: 1,
    description: 'Salário',
    value: 3000,
    date: '2022-01-01',
    month: 'Janeiro',
    type: 'Entrada',
    is_paid: true,
  },
  {
    id: 2,
    description: 'Aluguel',
    value: 1000,
    date: '2022-01-15',
    month: 'Janeiro',
    type: 'Saída',
    is_paid: true,
    due_date: '2022-01-15',
  },
  {
    id: 3,
    description: 'Mercado',
    value: 500,
    date: '2022-01-20',
    month: 'Janeiro',
    type: 'Saída',
    due_date: '2022-01-20',
    is_paid: false,
  },
  {
    id: 4,
    description: 'Cartão de Crédito',
    value: 2500,
    date: '2022-01-30',
    month: 'Janeiro',
    type: 'Saída',
    due_date: '2022-01-30',
    is_paid: false,
  },
]

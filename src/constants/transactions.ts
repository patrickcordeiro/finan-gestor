export interface ITransaction {
  id: number
  description: string
  value: number
  date: string
  month: string
  type: string
}

export const transactions: ITransaction[] = [
  {
    id: 1,
    description: 'Salário',
    value: 3000,
    date: '2022-01-01',
    month: 'Janeiro',
    type: 'Entrada',
  },
  {
    id: 2,
    description: 'Aluguel',
    value: 1000,
    date: '2022-01-15',
    month: 'Janeiro',
    type: 'Saída',
  },
  {
    id: 3,
    description: 'Mercado',
    value: 500,
    date: '2022-01-20',
    month: 'Janeiro',
    type: 'Saída',
  },
  {
    id: 4,
    description: 'Cartão de Crédito',
    value: 2500,
    date: '2022-01-30',
    month: 'Janeiro',
    type: 'Saída',
  },
]

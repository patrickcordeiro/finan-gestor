export default function formatCurrency(value: number) {
  if (!value || isNaN(value)) {
    return '0,00'
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

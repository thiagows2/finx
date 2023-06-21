export function formatCurrency(value: number): string {
  const format = {
    style: 'currency',
    currency: 'BRL'
  }

  return new Intl.NumberFormat('pt-BR', format).format(value)
}

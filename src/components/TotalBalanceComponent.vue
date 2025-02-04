<template>
  <div class="total-balance">
    <div class="balance">
      <h3>Saldo {{ props.monthSelected }}:</h3>
      <span :style="{ color: balanceColor }">{{ currencyFormated }}</span>
    </div>

    <p>O valor é referente ao período selecionado</p>
  </div>
</template>

<script setup lang="ts">
import formatCurrency from '@/utils/formatCurrency'
import { computed } from 'vue'

const props = defineProps<{
  totalBalance: number
  monthSelected: string
  typeSelected: string
}>()

const balanceColor = computed(() => {
  return props.totalBalance >= 0 ? 'green' : 'red'
})

const currencyFormated = computed(() => {
  return formatCurrency(props.totalBalance)
})
</script>

<style scoped>
.total-balance {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;

  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    span {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  p {
    font-style: italic;
  }
}
</style>

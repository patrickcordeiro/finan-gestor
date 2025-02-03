<template>
  <div class="container">
    <div class="container-header">
      <h1>Resumo Financeiro</h1>
      <FiltersTransaction @filter-changed="changeFilterSelected" />
    </div>

    <div class="without-transactions" v-if="!transactionsFiltered.length">
      <p>Ops, nada por aqui...</p>
    </div>

    <div
      v-for="transaction in transactionsFiltered"
      :key="transaction.id"
      class="transactions-list"
    >
      <TransactionCard :transaction="transaction" @delete-card="deleteCard" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TransactionCard from './TransactionCard.vue'
import FiltersTransaction from './FiltersTransaction.vue'
import { computed, ref } from 'vue'

const props = defineProps<{
  transactionList: {
    id: number
    description: string
    value: number
    date: string
    month: string
    type: string
  }[]
}>()

const typeSelected = ref('all')
const actualMonth = computed(() => {
  return new Date().toLocaleString('pt-BR', { month: 'long' })
})

const monthSelected = ref(actualMonth.value)

const transactionsFiltered = computed(() => {
  if (typeSelected.value === 'all') {
    return props.transactionList.filter((transaction) => {
      if (transaction.month.toLowerCase() === monthSelected.value) {
        return transaction
      }
    })
  }

  const filterValue = typeSelected.value === 'income' ? 'Entrada' : 'Saída'

  return props.transactionList.filter((transaction) => {
    if (
      transaction.type === filterValue &&
      transaction.month.toLowerCase() === monthSelected.value
    ) {
      return transaction
    }
  })
})

const changeFilterSelected = ({ type, month }: { type: string; month: string }) => {
  typeSelected.value = type
  monthSelected.value = month
}

const emit = defineEmits(['delete-card'])

const deleteCard = (idCard: number) => {
  emit('delete-card', idCard)
}
</script>

<style>
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 10px;

    h1 {
      font-size: 24px;
    }
  }

  .without-transactions {
    display: flex;
    align-self: center;

    p {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .transactions-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>

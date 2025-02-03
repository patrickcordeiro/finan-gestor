<template>
  <div class="container">
    <div class="container-header">
      <h1>Resumo Financeiro</h1>
      <FiltersTransaction @filter-changed="changeFilterSelected" />
    </div>

    <div class="without-transactions" v-if="!props.transactionList.length">
      <p>Você ainda não possui nenhum lançamento</p>
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

const filterSelected = ref('all')
const transactionsFiltered = computed(() => {
  if (filterSelected.value === 'all') return props.transactionList
  return props.transactionList.filter((transaction) => {
    const filterValue = filterSelected.value === 'income' ? 'Entrada' : 'Saída'

    if (transaction.type === filterValue) {
      return transaction
    }
  })
})

const changeFilterSelected = (selected: string) => {
  filterSelected.value = selected
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

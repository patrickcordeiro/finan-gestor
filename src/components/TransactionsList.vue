<template>
  <div class="container">
    <h1>Resumo Financeiro</h1>

    <div
      v-for="transaction in props.transactionList"
      :key="transaction.id"
      class="transactions-list"
    >
      <TransactionCard :transaction="transaction" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TransactionCard from './TransactionCard.vue'

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
</script>

<style>
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 24px;
  }

  .transactions-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>

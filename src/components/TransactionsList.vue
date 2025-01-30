<template>
  <div class="container">
    <h1>Resumo Financeiro</h1>

    <div v-for="transaction in transactionList" :key="transaction.id" class="transactions-list">
      <TransactionCard :transaction="transaction" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TransactionCard from './TransactionCard.vue'

const transactionList = ref([
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
])
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

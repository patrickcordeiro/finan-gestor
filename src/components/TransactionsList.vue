<template>
  <div class="container" v-if="!isModalAddtransaction">
    <div class="container-header">
      <h1>Resumo Financeiro</h1>
      <FiltersTransaction @filter-changed="($emit) => emit('change-filters', $emit)" />
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

    <button class="add-transaction" @click="isModalAddtransaction = true">
      Adicionar Transação
    </button>
  </div>
  <div class="container-form" v-if="isModalAddtransaction">
    <AddTransactionForm
      :transaction-list="props.transactionList"
      :handleModalAddTransaction="handleModalAddTransaction"
    />
  </div>
</template>

<script setup lang="ts">
import TransactionCard from './TransactionCard.vue'
import FiltersTransaction from './FiltersTransaction.vue'
import AddTransactionForm from './AddTransactionForm.vue'
import { ref } from 'vue'
import type { ITransaction } from '@/constants/transactions'

const props = defineProps<{
  transactionList: ITransaction[]
  transactionsFiltered: ITransaction[]
  typeSelected: string
  monthSelected: string
}>()

const emit = defineEmits(['delete-card', 'change-filters'])

const isModalAddtransaction = ref<boolean>(false)

const handleModalAddTransaction = (status: boolean) => {
  isModalAddtransaction.value = status
}

const deleteCard = (idCard: number) => {
  emit('delete-card', idCard)
}
</script>

<style>
.container-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

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
    align-items: center;
    min-height: 250px;
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

  .add-transaction {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
  }
}
</style>

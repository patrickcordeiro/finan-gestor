<template>
  <HeaderComponent :total-balance="totalBalanceAccount" />
  <main>
    <div class="container-main">
      <TransactionsList
        :transaction-list="transactionList"
        :month-selected="monthSelected"
        :type-selected="typeSelected"
        :transactions-filtered="transactionsFiltered"
        @delete-card="deleteCard"
        @change-filters="changeFilterSelected"
      />
      <div class="container-aside">
        <TotalBalanceComponent
          :total-balance="totalBalanceFiltered"
          :month-selected="monthSelected"
          :type-selected="typeSelected"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import TransactionsList from './components/TransactionsList.vue'
import TotalBalanceComponent from './components/TotalBalanceComponent.vue'
import { computed, ref } from 'vue'
import { transactions } from './constants/transactions'

const transactionList = ref(transactions)

const totalBalanceAccount = computed(() => {
  return transactionList.value.reduce(
    (
      acc: number,
      transaction: {
        id: number
        description: string
        value: number
        date: string
        month: string
        type: string
      },
    ) => {
      if (transaction.type === 'Entrada') {
        return acc + transaction.value
      } else {
        return acc - transaction.value
      }
    },
    0,
  )
})

const actualMonth = computed(() => {
  return new Date().toLocaleString('pt-BR', { month: 'long' })
})

const monthSelected = ref(actualMonth.value)
const typeSelected = ref<string>('all')

const changeFilterSelected = (filters: { type: string; month: string }) => {
  typeSelected.value = filters.type
  monthSelected.value = filters.month
}

const transactionsFiltered = computed(() => {
  if (typeSelected.value === 'all') {
    return transactionList.value.filter((transaction) => {
      if (transaction.month.toLowerCase() === monthSelected.value) {
        return transaction
      }
    })
  }

  const filterValue = typeSelected.value === 'income' ? 'Entrada' : 'Saída'

  return transactionList.value.filter((transaction) => {
    if (
      transaction.type === filterValue &&
      transaction.month.toLowerCase() === monthSelected.value
    ) {
      return transaction
    }
  })
})

const totalBalanceFiltered = computed(() => {
  return transactionsFiltered.value.reduce(
    (
      acc: number,
      transaction: {
        id: number
        description: string
        value: number
        date: string
        month: string
        type: string
      },
    ) => {
      if (transaction.type === 'Entrada') {
        return acc + transaction.value
      } else {
        return acc - transaction.value
      }
    },
    0,
  )
})

const deleteCard = (idCard: number) => {
  transactionList.value = transactionList.value.filter((transaction) => transaction.id !== idCard)
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  .container-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    gap: 50px;

    .container-aside {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}

/* tablet */
/* @media only screen and (min-width: 600px) {
  main {
    .container-main {

    }
  }
} */

/* desktop */
/* @media only screen and (min-width: 768px) {
  main {
    .container-main {
    }
  }
} */

@media only screen and (min-width: 1024px) {
  main {
    .container-main {
      .container-aside {
        min-width: 450px;
      }
    }
  }
}

@media only screen and (min-width: 1200px) {
  main {
    .container-main {
      flex-direction: row;
      width: 80%;
    }
  }
}
</style>

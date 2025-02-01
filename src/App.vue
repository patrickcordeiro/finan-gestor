<template>
  <HeaderComponent />
  <main>
    <div class="container-main">
      <div class="container-aside">
        <AddTransactionForm />
        <TotalBalanceComponent :total-balance="totalBalance" />
      </div>
      <TransactionsList :transaction-list="transactionList" />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import AddTransactionForm from './components/AddTransactionForm.vue'
import TransactionsList from './components/TransactionsList.vue'
import TotalBalanceComponent from './components/TotalBalanceComponent.vue'
import { computed, ref } from 'vue'

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
  {
    id: 4,
    description: 'Cartão de Crédito',
    value: 2500,
    date: '2022-01-30',
    month: 'Janeiro',
    type: 'Saída',
  },
])

const totalBalance = computed(() => {
  const total = transactionList.value.reduce(
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

  return total
})
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

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
@media only screen and (min-width: 600px) {
  main {
    .container-main {
      /* flex-direction: row; */
    }
  }
}

/* desktop */
@media only screen and (min-width: 768px) {
  main {
    .container-main {
    }
  }
}

@media only screen and (min-width: 1024px) {
  main {
    .container-main {
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

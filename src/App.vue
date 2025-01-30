<template>
  <HeaderComponent />
  <main>
    <div class="container-main">
      <AddTransactionForm />
      <TransactionsList />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import AddTransactionForm from './components/AddTransactionForm.vue'
import TransactionsList from './components/TransactionsList.vue'
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  .container-main {
    display: flex;
    justify-content: space-between;
    width: 80%;
    gap: 50px;
  }
}
</style>

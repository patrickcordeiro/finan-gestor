<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import AddTransactionForm from './components/AddTransactionForm.vue'
</script>

<template>
  <HeaderComponent />
  <main>
    <div>
      <AddTransactionForm />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  div {
    width: 80%;
  }
}
</style>

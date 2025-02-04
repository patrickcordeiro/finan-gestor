<template>
  <header>
    <div class="header-box">
      <div class="logo">
        <h1>Finan Gestor</h1>
      </div>

      <div class="account-balance">
        <p>Saldo da Conta</p>
        <span :style="{ color: balanceColor }"> {{ currencyFormated }} </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import formatCurrency from '@/utils/formatCurrency'
import { computed } from 'vue'

const props = defineProps<{
  totalBalance: number
}>()

const balanceColor = computed(() => {
  return props.totalBalance >= 0 ? 'green' : 'red'
})

const currencyFormated = computed(() => {
  return formatCurrency(props.totalBalance)
})
</script>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 10px 32px -12px rgba(0, 0, 0, 0.25);
  background-color: rgb(248, 249, 250);

  .header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }

  .account-balance {
    span {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}
</style>

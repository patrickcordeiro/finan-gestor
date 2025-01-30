<template>
  <div class="card" :style="{ borderLeft: '5px solid ' + cardColor }">
    <div class="card-data">
      <h3 class="card-data-title">
        {{ props.transaction.description }} - Mês {{ props.transaction.month }}
      </h3>
      <p class="card-data-value">R$ {{ props.transaction.value }},00</p>
    </div>

    <div class="card-type">
      <span :style="{ backgroundColor: cardColor }">{{ props.transaction.type }}</span>
      <button>Excluir</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  transaction: {
    id: number
    description: string
    value: number
    date: string
    month: string
    type: string
  }
}>()

const cardColor = computed(() => {
  return props.transaction.type === 'Entrada' ? '#4caf50' : '#f44336'
})
</script>

<style>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: rgb(216, 216, 216);
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  .card-data {
    display: flex;
    flex-direction: column;

    .card-data-title {
      font-size: 18px;
      font-weight: bold;
    }

    .card-data-value {
      font-size: 18px;
      font-weight: normal;
    }
  }

  .card-type {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      text-align: center;
      padding: 2px 10px;
      border-radius: 30px;
      color: white;
      font-size: 14px;
      font-weight: bold;
    }

    button {
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #f44336;
      color: white;
      font-size: 14px;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }
  }
}
</style>

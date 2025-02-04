<template>
  <div class="card" :style="{ borderLeft: '5px solid ' + cardColor }">
    <div class="card-data">
      <h3 class="card-data-title">
        {{ props.transaction.description }}
      </h3>
      <p class="card-data-value">{{ currencyFormated }}</p>
      <div class="card-type">
        <span :style="{ backgroundColor: cardColor }">{{ props.transaction.type }}</span>
      </div>
    </div>

    <div class="options">
      <button class="card-delete" @click="() => emit('delete-card', props.transaction.id)">
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 490.646 490.646"
          xml:space="preserve"
          width="18"
          height="18"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M399.179,67.285l-74.794,0.033L324.356,0L166.214,0.066l0.029,67.318l-74.802,0.033l0.025,62.914h307.739L399.179,67.285z M198.28,32.11l94.03-0.041l0.017,35.262l-94.03,0.041L198.28,32.11z"
                ></path>
                <path
                  d="M91.465,490.646h307.739V146.359H91.465V490.646z M317.461,193.372h16.028v250.259h-16.028V193.372L317.461,193.372z M237.321,193.372h16.028v250.259h-16.028V193.372L237.321,193.372z M157.18,193.372h16.028v250.259H157.18V193.372z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>

      <span :style="{ color: props.transaction.is_paid ? '#4caf50' : '#f44336' }">{{
        status
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITransaction } from '@/constants/transactions'
import formatCurrency from '@/utils/formatCurrency'
import { computed } from 'vue'

const props = defineProps<{
  transaction: ITransaction
}>()

const cardColor = computed(() => {
  return props.transaction.type === 'Entrada' ? '#4caf50' : '#f44336'
})

const currencyFormated = computed(() => {
  return formatCurrency(props.transaction.value)
})

const status = computed(() => {
  let status = 'Pendente'

  if (props.transaction.is_paid) {
    status = props.transaction.type === 'Entrada' ? 'Recebido' : 'Pago'
  }

  return status
})

const emit = defineEmits(['delete-card'])
</script>

<style>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  /* background-color: rgb(216, 216, 216); */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  .card-data {
    display: flex;
    flex-direction: column;
    gap: 1px;

    .card-data-title {
      font-size: 18px;
      font-weight: bold;
    }

    .card-data-value {
      font-size: 18px;
      font-weight: normal;
    }
    .card-type {
      display: flex;
      flex-direction: column;
      gap: 10px;

      span {
        width: fit-content;
        text-align: center;
        padding: 2px 10px;
        border-radius: 30px;
        color: white;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  .options {
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 100%;
    justify-content: space-between;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    button:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
}

.card:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

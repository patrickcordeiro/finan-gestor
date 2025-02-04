<template>
  <div class="modal-add-transaction">
    <div class="transaction-form">
      <div class="close-modal">
        <button @click="props.handleModalAddTransaction(false)">X</button>
      </div>
      <form>
        <div class="form-group">
          <label for="description">Descrição</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Digite aqui sua descrição..."
            v-model="description"
          />
        </div>

        <div class="form-group">
          <label for="value">Valor (R$)</label>
          <input type="text" name="value" id="value" placeholder="0,00" v-model="value" />
        </div>

        <div class="form-group">
          <label for="value-type">Tipo de valor</label>
          <select name="value-type" id="value-type" v-model="valueType">
            <option disabled value="">Selecione o tipo...</option>
            <option value="income">Entrada</option>
            <option value="output">Saída</option>
          </select>
        </div>

        <button type="submit" @click="addtransaction">Adicionar transação</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  transactionList: {
    type: Object,
    required: true,
  },
  handleModalAddTransaction: {
    type: Function,
    required: true,
  },
})

const description = defineModel('description', {
  type: String,
  default: '',
})

const value = defineModel('value', {
  type: String,
  default: '',
})

const valueType = defineModel('valueType', {
  type: String,
  default: '',
})

const transactionArray = ref(props.transactionList)

const addtransaction = (e: Event) => {
  e.preventDefault()

  const transaction: {
    id: number
    description: string
    value: number
    date: string
    month: string
    type: string
  } = {
    id: props.transactionList.length + 1,
    description: description.value,
    value: parseFloat(value.value.replace(',', '.')),
    date: new Date().toISOString(),
    month: new Date().toLocaleString('pt-BR', { month: 'long' }),
    type: valueType.value === 'income' ? 'Entrada' : 'Saída',
  }

  transactionArray.value.push(transaction)

  description.value = ''
  value.value = ''
  valueType.value = ''

  props.handleModalAddTransaction(false)
}
</script>

<style>
.modal-add-transaction {
  border: 1px solid #ccc;

  .transaction-form {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;

    .close-modal {
      align-self: flex-end;

      button {
        border: none;
        background-color: transparent;
        color: red;
        font-size: 20px;
        font-weight: bold;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 10px 20px;
      gap: 20px;

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 10px;

        input {
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        select {
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;

          option {
            padding: 10px;
          }
        }
      }

      button {
        background-color: #4caf50;
        color: white;
        padding: 15px 20px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
}
</style>

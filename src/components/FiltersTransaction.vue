<template>
  <div class="filters">
    <div>
      <label for="month-transactions-filter">Mês</label>
      <select
        v-model="monthSelected"
        @change="emit('filter-changed', filters)"
        name="month-transactions-filter"
      >
        <option
          v-for="month in months"
          :key="month.name"
          :id="month.value"
          :value="month.value"
          :selected="monthSelected === month.value"
          :name="month.value"
        >
          {{ month.name }}
        </option>
      </select>
    </div>

    <div>
      <label for="type-transactions-filter">Tipo</label>
      <select
        v-model="typeSelected"
        @change="emit('filter-changed', filters)"
        name="type-transactions-filter"
      >
        <option
          v-for="type in types"
          :key="type.name"
          :id="type.value"
          :value="type.value"
          :selected="type.selected"
          :name="type.value"
        >
          {{ type.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const typeSelected = ref('all')

const actualMonth = computed(() => {
  return new Date().toLocaleString('pt-BR', { month: 'long' })
})

const monthSelected = ref(actualMonth.value)

const months = ref([
  { name: 'Janeiro', value: 'janeiro', selected: false },
  { name: 'Fevereiro', value: 'fevereiro', selected: false },
  { name: 'Março', value: 'marco', selected: false },
  { name: 'Abril', value: 'abril', selected: false },
  { name: 'Maio', value: 'maio', selected: false },
  { name: 'Junho', value: 'junho', selected: false },
  { name: 'Julho', value: 'julho', selected: false },
  { name: 'Agosto', value: 'agosto', selected: false },
  { name: 'Setembro', value: 'setembro', selected: false },
  { name: 'Outubro', value: 'outubro', selected: false },
  { name: 'Novembro', value: 'novembro', selected: false },
  { name: 'Dezembro', value: 'dezembro', selected: false },
])

const types = ref([
  {
    name: 'Todos',
    value: 'all',
    selected: true,
  },
  {
    name: 'Entradas',
    value: 'income',
    selected: false,
  },
  {
    name: 'Saídas',
    value: 'outcome',
    selected: false,
  },
])

const filters = ref({
  type: typeSelected,
  month: monthSelected,
})

const emit = defineEmits(['filter-changed'])
</script>

<style>
.filters {
  display: flex;
  gap: 30px;
  justify-content: space-between;

  div {
    display: flex;
    gap: 5px;
  }
}
</style>

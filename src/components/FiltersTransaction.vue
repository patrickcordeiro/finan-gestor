<template>
  <div class="filters">
    <div v-for="filter in filters" :key="filter.name">
      <input
        type="radio"
        :id="filter.value"
        :value="filter.value"
        :checked="filter.checked"
        :name="filter.value"
        @click="($emit) => changeFilter(filter.value)"
      />
      <label :for="filter.value">{{ filter.name }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = ref([
  {
    name: 'Todos',
    value: 'all',
    checked: true,
  },
  {
    name: 'Entradas',
    value: 'income',
    checked: false,
  },
  {
    name: 'Saídas',
    value: 'outcome',
    checked: false,
  },
])

const emit = defineEmits(['filter-changed'])

const changeFilter = (selected: string) => {
  filters.value = filters.value.map((filter) => {
    filter.checked = filter.value === selected
    return filter
  })

  emit('filter-changed', selected)
}
</script>

<style>
.filters {
  display: flex;
  gap: 30px;
  justify-content: space-between;
}
</style>

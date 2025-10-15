<script setup>
import { ref, computed } from 'vue'

const counter = ref(0)
const favoriteNumbers = ref([])

const increment = () => counter.value++
const decrement = () => counter.value--
const reset = () => counter.value = 0

const add = () => {
  favoriteNumbers.value.push(counter.value)
}

// Computed properties
const classCounter = computed(() => {
  if (counter.value === 0) return 'zero'
  if (counter.value > 0) return 'positive'
  return 'negative'
})

const isFavorite = computed(() =>
  favoriteNumbers.value.includes(counter.value)
)
</script>

<template>
  <h2 :class="classCounter">{{ counter }}</h2>

  <button @click="increment">Aumentar Contador</button>
  <button @click="decrement">Disminuir Contador</button>
  <button @click="reset">Resetear Contador</button>
  <button @click="add" :disabled="isFavorite">Añadir fav</button>

  <ul>
    <li v-for="number in favoriteNumbers" :key="number">{{ number }}</li>
  </ul>
</template>

<style>
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: white;
}
</style>

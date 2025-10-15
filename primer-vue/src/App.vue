<script setup>

  import {ref} from 'vue';
  const name = "Armando";

  //methods
  const counter = ref(0);

  const increment = () =>{
    counter.value++;
  }

  const decrement = () =>{
    counter.value--;
  }

  const reset = () =>{
    counter.value = 0;
  }

</script>
<!--v-on se puede abreviar con @-->
<template>

  <h2 :class="counter > 0 ? 'positive' : 'negative'">{{ counter }}</h2>

  <button @click="increment">Aumentar Contador</button>
  <button @click="decrement">Disminuir Contador</button>
  <button @click="reset">Resetear Contador</button>
</template>

<style> 
  h1{
    color:red;
  }
  .positive{
    color:green
  }

  .negative{
    color:red
  }
</style>
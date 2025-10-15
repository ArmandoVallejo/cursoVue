<script setup>
  const name = "Armando";

  //methods
  const handleClick = (message) => {
    console.log(message);

  }

</script>
<!--v-on se puede abreviar con @-->
<template>
  <button v-on:click.right.prevent="handleClick('boton derecho')">Boton Right</button>
  <button @click.left="handleClick('boton izquierdo')">Boton Left</button>
  <button @click.middle="handleClick('boton central')">Boton Middle</button>
</template>

<style>
  h1{
    color:red;
  }
</style>
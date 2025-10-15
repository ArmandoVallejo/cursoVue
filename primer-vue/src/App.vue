<script setup>
  const name = "Armando";
  const styleColor = "color: blue";
  const arrayColores = ["azul", "verde", "rojo"];
  const activo = true;
</script>
<!-- v-bind puede ser reemplazado dejando solamente los : -->
<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 :style="styleColor">Soy azul</h2>
  <h2> {{ arrayColores }}</h2>
<!--Las directivas v-if y v-else permiten mostrar elementos segun las condiciones, tambien existe v-else-if-->
  <h2 v-if="activo">Estoy activo</h2>
  <h2 v-else>Estoy inactivo</h2>

  <h2 v-show="activo">activo v-show</h2>


</template>

<style>
  h1{
    color:red;
  }
</style>
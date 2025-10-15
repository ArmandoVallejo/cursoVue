<script setup>
  const name = "Armando";
  const styleColor = "color: blue";
  const arrayColores = ["azul", "verde", "rojo"];
  const activo = true;
  const arrayFrutas = [
    {
      name:"Manzana",
      price:"$1.00",
      description:"Una manzana"
    },
    {
      name:"Pera",
      price:"$2.00",
      description:"Una pera"
    },
    {
      name:"Naranja",
      price:"$3.00",
      description:"Una naranja"
    }, 
  ];

  const objetoFruta = {
    name:"Manzana",
    price:"$1.00",
    description:"Una manzana"
  }
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

  <ul>
    <li v-for="(fruta) in arrayFrutas" :key="fruta.name">{{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li>
  </ul>

  <ul>
    <li
      v-for="(value, propiedad) in objetoFruta"
    >
  {{propiedad}}:{{ value }}</li>
  </ul>


</template>

<style>
  h1{
    color:red;
  }
</style>
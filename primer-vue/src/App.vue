<script setup>
  const name = "Armando";
  const styleColor = "color: blue";
  const arrayColores = ["azul", "verde", "rojo"];
  const activo = true;
  const arrayFrutas = [
    {
      name:"Manzana",
      price:"$1.00",
      description:"Una manzana",
      stock:0
    },
    {
      name:"Pera",
      price:"$2.00",
      description:"Una pera",
      stock:10
    },
    {
      name:"Naranja",
      price:"$3.00",
      description:"Una naranja",
      stock:20
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
  <p>v-for recorre objeto</p>
  <ul>
    <li
      v-for="(value, propiedad) in objetoFruta"
    >
  {{propiedad}}:{{ value }}</li>
  </ul>

  <p>v-for y v-if juntos</p>
<!--No puedo usar v-for y v-if si la condicion y la iteracion son la misma, debido a que la condicion se ejecuta antes y si no esta definido la iteracion no sabe donde aplicar la condicion-->
  <ul>
    <li
      v-for="item in arrayFrutas" :key="item.name"
    >{{ item.name }} - {{ item.price }}</li>
  </ul>

  <p>v-for + v-if con template</p>
  <ul>
    <template v-for="item in arrayFrutas" :key="item.name">
      <li v-if="item.stock > 0"> 
        {{ item.name }} - {{ item.price }}

      </li>
    </template>
  </ul>


</template>

<style>
  h1{
    color:red;
  }
</style>
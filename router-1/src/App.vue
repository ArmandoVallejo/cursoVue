<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Bootstrap" width="30" height="24">
        Poke API
      </router-link>
      <div>
        <router-link class="btn btn-outlined-primary" to="/">Home</router-link>
        <router-link class="btn btn-outlined-primary" to="/pokemons">Pokemons</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

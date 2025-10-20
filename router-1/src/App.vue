<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-secondary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Bootstrap" width="30" height="24">
        Poke API
      </router-link>
      <div>
        <router-link class="btn btn-outlined-primary me-2" to="/">Home</router-link>
        <router-link class="btn btn-outlined-primary me-2" to="/pokemons">Pokemons</router-link>
        <router-link class="btn btn-outlined-primary me-2" to="/favoritos">Favoritos</router-link>
      </div>
    </div>
  </nav>
  <div class="container text-center">
    <RouterView />
  </div>
</template>

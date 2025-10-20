<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore();
const {favoritos} = storeToRefs(useFavoritos); 

</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul v-else class="list-group">
        <li class="list-group-item" v-for="pokemon in favoritos" :key="pokemon.id">{{ pokemon.name }}</li>
    </ul>

</template>
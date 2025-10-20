<script setup>
import { useGetData } from '@/composables/getData';
import { useFavoritosStore } from '@/store/favoritos';
import {useRoute, useRouter} from 'vue-router';

const useFavoritos = useFavoritosStore();

const {addFav} = useFavoritos

const {data, getData, loading, errorData} = useGetData();

const route = useRoute();
const router = useRouter();

const back = () =>{
    router.push('/pokemons');
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <p v-if="loading">Cargando...</p>
    <div class="alert alert-danger" v-if="errorData">{{ errorData }}</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="" />
        <h1>Pokemon name: {{ $route.params.name }}</h1>
        <button class="btn btn-primary mb-2" @click="addFav(data)">Favorito</button>
    </div>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>
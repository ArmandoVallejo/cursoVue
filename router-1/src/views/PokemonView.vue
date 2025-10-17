<script setup>
import { useGetData } from '@/composables/getData';
import {useRoute, useRouter} from 'vue-router';

const {data, getData, loading} = useGetData();

const route = useRoute();
const router = useRouter();

const back = () =>{
    router.push('/pokemons');
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <p v-if="loading">Cargando...</p>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="" />
        <h1>Pokemon name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
    import { useGetData } from '@/composables/getData';

    const {data, getData, loading} = useGetData();

    getData("https://pokeapi.co/api/v2/pokemon");
</script>
<template>
    <p v-if="loading">Cargando...</p>
    <div v-if="data">
        <h1>Pokemons</h1>
        <ul>
            <li v-for="pokemon in data.results" :key="pokemon.name">
                <router-link :to="`/pokemons/${pokemon.name}`"> {{ pokemon.name }} </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
    import { useGetData } from '@/composables/getData';

    const {data, getData, loading, errorData} = useGetData();

    getData("https://pokeapi.co/api/v2/pokemon");
</script>
<template>
    <p v-if="loading">Cargando...</p>
        <div class="alert alert-danger" v-if="errorData">{{ errorData }}</div>

    <div v-if="data">
        <h1>Pokemons</h1>
        <ul>
            <li v-for="pokemon in data.results" :key="pokemon.name">
                <router-link :to="`/pokemons/${pokemon.name}`"> {{ pokemon.name }} </router-link>
            </li>
        </ul>
        <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>

    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const pokemon = ref({});

const back = () =>{
    router.push('/pokemons');
};

    const getData = async() =>{
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

            pokemon.value = data;
            
        } catch (error) {
            console.log(error);
            pokemon.value = null;
        }
        
    };

    getData();

</script>

<template>
    <div v-if="pokemon">
        <img :src="pokemon.sprites?.front_default" alt="" />
        <h1>Pokemon name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);

    const addFav = (pokemon) => {
        favoritos.value.push(pokemon)
    }
    
    const removeFav = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
    }

    const findPoke = (name) => favoritos.value.find(item => item.name === name);

    return{
        favoritos,
        addFav,
        removeFav,
        findPoke
    };
})
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', ()=>{

    const favoritos = ref([]);

    const addFav = (pokemon) => {
        favoritos.value.push(pokemon)
    }

    return{
        favoritos,
        addFav
    };
})
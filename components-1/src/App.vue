<script setup>
import BlogPost from './components/BlogPost.vue';
import { onMounted, ref } from 'vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const posts = ref([]);
const favorito = ref('');
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(false);

const cambiarFavorito = (title) =>{
  favorito.value = title;
}

const siguientePagina = () =>{
  inicio.value += postXpage;
  fin.value += postXpage;
}

const paginaAnterior = () => {
  inicio.value -= postXpage;
  fin.value -= postXpage; 
}

onMounted(async()=>{
  loading.value=true;
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  }catch(error){
    console.log(error)
  }finally{
    loading.value = false
  }
})
</script>

<template>
  <LoadingSpinner class="mt-5" v-if="loading"/>
  <div v-else class="container">
      <h1>App</h1>
      <h2>Fav ♥️: {{ favorito }}</h2>
    <PaginatePost
      class="mb-2"
      :inicio="inicio"
      :fin="fin"
      :maxLength="posts.length"
      @siguientePagina="siguientePagina"
      @paginaAnterior="paginaAnterior"
    />

    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.text"
      @cambiarFavoritoNombre="cambiarFavorito"
    /> 
  </div>
</template>
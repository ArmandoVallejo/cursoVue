<script setup>
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const posts = ref([]);
const favorito = ref('');
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(true);

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

fetch('https://jsonplaceholder.typicode.com/posts')
  .then( res => res.json())
  .then( data => posts.value = data)
  .catch((e)=> console.log(e))
  .finally(()=> loading.value = false)

</script>

<template>
  <LoadingSpinner class="mt-5" v-if="loading"/>
  <div v-else class="container">
      <h1>App</h1>
      <h2>Mi post favorito: {{ favorito }}</h2>

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
<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';

const posts = ref([]);
const favorito = ref('');

const cambiarFavorito = (title) =>{
  favorito.value = title;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then( res => res.json())
  .then( data => posts.value = data);
</script>

<template>
  <h1>App</h1>
  <h2>Mi post favorito: {{ favorito }}</h2>

  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :id="post.id"
    :body="post.text"
    @cambiarFavoritoNombre="cambiarFavorito"
  /> 
</template>
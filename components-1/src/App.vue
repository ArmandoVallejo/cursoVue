<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';

const posts = ref([
  {title:'Post 1', id: 1, text:'Texto para el componente 1'},
  {title:'Post 2', id: 2, text:'Texto para el componente 2'},
  {title:'Post 3', id: 3, text:'Texto para el componente 3'},
  {title:'Post 4', id: 4, text:'Texto para el componente 4'},

]);
</script>

<template>
  <h1>App</h1>
  <ButtonCounter />
  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :id="post.id"
    :text="post.text"

  />
  

  
</template>
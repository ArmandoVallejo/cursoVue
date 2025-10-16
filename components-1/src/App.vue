<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
</script>

<template>
  <h1>App</h1>
  <ButtonCounter />
  <BlogPost title="Post 01" :id="1" text="Texto para el componente 1" colorText="primary"/>
  <BlogPost title="Post 02" :id="2" text="Texto para el componente 2" colorText="secondary"/>
  <BlogPost title="Post 03" :id="3" text="Texto para el componente 3" colorText="success"/>

  
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const back = () =>{
    router.push('/');
};

</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center text-center">
    <div>
      <h1 class="display-1 fw-bold text-primary">404</h1>
      <p class="fs-4 text-muted">Página no encontrada</p>
      <p class="mb-4">La página que buscas no existe o fue movida.</p>
      <div class="d-flex gap-2 justify-content-center">
        <button @click="back" class="btn btn-primary">
          ← Regresar
        </button>
      </div>
    </div>
  </div>
</template>
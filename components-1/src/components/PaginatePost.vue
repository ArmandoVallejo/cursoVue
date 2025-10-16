<script setup>
    defineProps(['inicio','fin','maxLength'])

    defineEmits(['siguientePagina','paginaAnterior'])
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary" @click="$emit('paginaAnterior')" :disabled="inicio===0">Previous</button>
        <button type="button" class="btn btn-outline-primary" @click="$emit('siguientePagina')" :disabled="fin===maxLength">Next</button>
    </div>
</template>
<script setup>
//recibe los props, puede ser con array o con object
    //defineProps(['title','id','text'])
    defineProps({
        title: String,
        id: Number,
        body: {
            type: String,
            deafult: 'Sin texto'
        }
    })

    defineEmits(['cambiarFavoritoNombre'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{id}}-{{ title }}</h5>
            <p>{{ body }}</p>
            <button @click="$emit('cambiarFavoritoNombre', title)" class="btn btn-outline-primary">Favorito</button>
        </div>
    </div>
</template>


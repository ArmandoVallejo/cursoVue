<script setup>
//recibe los props, puede ser con array o con object
    //defineProps(['title','id','text'])
    defineProps({
        title: String,
        id: Number,
        text: {
            type: String,
            deafult: 'Sin texto'
        }
    })
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{id}}-{{ title }}</h5>
            <p>{{ text }}</p>
        </div>
    </div>
</template>


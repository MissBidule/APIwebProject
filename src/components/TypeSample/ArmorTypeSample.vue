<template>
    <div class="glove-type-item">
      <router-link :to="{ name: 'armorPage', params: { id: id }}">
        <img alt="Armor-piece-male-picture" rel="preload" v-bind:src=img1 />
        <img alt="Armor-piece-male-picture" rel="preload" v-bind:src=img2 />
        <p>{{name}}</p>
      </router-link>
    </div>
</template>
    
<script>
    export default {
    name: 'GloveTypeSample',
    props: {
        name: {type: String,  required: true,default:"name not found"},
        img1: {type: String, required: true},
        img2: {type: String, required: true},
        id: {type: Number, required: true, default: 0}
    }
    }
</script>
    
<style scoped>
    .glove-type-item img {
        width: 5em;
    }

    .glove-type-item, .glove-type-item a {
        text-align: center;
        text-decoration: none;
    }

    .glove-type-item p {
        margin: 0;
    }
</style>
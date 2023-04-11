<template>
    <div class="leg-type-item">
      <router-link :to="{ name: 'armorPage', params: { id: id }}">
        <img alt="Armor-piece-male-picture" v-bind:src=img1 />
        <img alt="Armor-piece-male-picture" v-bind:src=img2 />
        <p>{{name}}</p>
      </router-link>
    </div>
</template>
    
<script>
    import imageM from "@/assets/placeholder_leggings_male.png"
    import imageF from "@/assets/placeholder_leggings_female.png"
    
    export default {
    name: 'LegTypeSample',
    props: {
        name: {type: String,  required: true,default:"name not found"},
        img1: {type: String, required: true, default:imageM},
        img2: {type: String, required: true, default:imageF},
        id: {type: Number, required: true, default: 0}
    }
    }
</script>
    
<style scoped>
    .leg-type-item img {
        width: 5em;
    }

    .leg-type-item, .leg-type-item a {
        text-align: center;
        text-decoration: none;
    }

    .leg-type-item p {
        margin: 0;
    }
</style>
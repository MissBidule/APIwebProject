<template>
    <div class="chest-type-item">
      <router-link :to="{ name: 'armorPage', params: { id: id }}">
        <img alt="Armor-piece-male-picture" v-bind:src=img1 />
        <img alt="Armor-piece-male-picture" v-bind:src=img2 />
        <p>{{name}}</p>
      </router-link>
    </div>
</template>
    
<script>
    import imageM from "@/assets/placeholder_armor_male.png"
    import imageF from "@/assets/placeholder_armor_female.png"
    
    export default {
    name: 'ChestTypeSample',
    props: {
        name: {type: String,  required: true,default:"name not found"},
        img1: {type: String, required: true, default:imageM},
        img2: {type: String, required: true, default:imageF},
        id: {type: Number, required: true, default: 0}
    }
    }
</script>
    
<style scoped>
    .chest-type-item img {
        width: 5em;
    }

    .chest-type-item, .chest-type-item a {
        text-align: center;
        text-decoration: none;
    }

    .chest-type-item p {
        margin: 0;
    }
</style>
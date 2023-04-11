<template>
    <div class="monster-type-item">
      <router-link :to="{ name: 'armorPage', params: { id: id }}">
        <img alt="monster-picture" v-bind:src=img class="monster-img" />
        <p><img alt="monster-icon" v-bind:src=icon />{{name}}</p>
      </router-link>
    </div>
</template>
    
<script>
    export default {
        name: 'MonsterTypeSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            img: {type: String, required: true, default:"https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"},
            icon: {type: String, required: true, default:"https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"},
            id: {type: Number, required: true, default: 0}
        }
    }
</script>
    
<style scoped>
    img.monster-img {
        height: auto;
        width: 10em;
        max-height: 10em;
    }

    .monster-type-item, .monster-type-item a {
        text-align: center;
        text-decoration: none;
    }

    .monster-type-item p {
        margin: 0;
    }

    .monster-type-item p img {
        width: 1em;
    }
</style>
<template>
    <div class="weapon-type-item">
      <router-link :to="{ name: 'armorPage', params: { id: id }}">
        <img alt="weapon-picture" v-bind:src=img />
        <p><img alt="weapon-icon" v-bind:src=icon />{{name}}</p>
      </router-link>
    </div>
</template>
    
<script>
    import image from "@/assets/placeholder_weapons.png"
    
    export default {
    name: 'WeaponTypeSample',
    props: {
        name: {type: String,  required: true,default:"name not found"},
        img: {type: String, required: true, default:image},
        icon: {type: String, required: true, default:"https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"},
        id: {type: Number, required: true, default: 0}
    }
    }
</script>
    
<style scoped>
    .weapon-type-item img {
        width: 10em;
    }

    .weapon-type-item, .weapon-type-item a {
        text-align: center;
        text-decoration: none;
    }

    .weapon-type-item p {
        margin: 0;
    }

    .weapon-type-item p img {
        width: 1em;
    }
</style>
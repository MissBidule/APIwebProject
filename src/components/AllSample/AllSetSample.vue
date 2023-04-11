<template>
  <div class="set-item">
    <router-link :to="{ name: 'setPage', params: { id: id }}">
      <img alt="Armor-set-picture" v-bind:src=img />
      <p>{{name}}</p>
    </router-link>
  </div>
</template>
  
  <script>
    import image from "@/assets/placeholder_armorset.png"
  
    export default {
      name: 'AllSetSample',
      props: {
        name: {type: String,  required: true,default:"name not found"},
        img: {type: String, required: true, default:image},
        id: {type: Number, required: true, default: 0}
      }
    }
  </script>
  
<style scoped>
  .set-item img {
    width: 10em;
  }

  .set-item, .set-item a {
    text-align: center;
    text-decoration: none;
  }

  .set-item p {
    margin: 0;
  }
</style>
<template>
    <div class="location-item">
      <router-link :to="{ name: 'locationPage', params: { id: id }}">
        <img alt="Location-picture" rel="preload" v-bind:src=img />
        <p>{{name}}</p>
      </router-link>
    </div>
  </template>
    
    <script>
      export default {
        name: 'AllLocationSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          img: {type: String, required: true, default:"https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"},
          id: {type: Number, required: true, default: 0}
        }
      }
    </script>
    
  <style scoped>
    .location-item img {
      width: 10em;
    }
  
    .location-item, .location-item a {
      text-align: center;
      text-decoration: none;
    }
  
    .location-item p {
      margin: 0;
    }
  </style>
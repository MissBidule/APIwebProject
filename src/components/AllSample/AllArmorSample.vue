<template>
    <div class="armor-card">
        <router-link :to="{ name: 'armorPage', params: { id: id }}">{{name}} | {{type}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllArmorSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          type: {type: String, required: true, default: "type undefined"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
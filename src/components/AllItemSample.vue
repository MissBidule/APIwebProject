<template>
    <div class="item-card">
        <router-link :to="{ name: 'itemPage', params: { id: id }}">{{name}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllItemSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
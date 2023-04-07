<template>
    <div class="decoration-card">
        <router-link :to="{ name: 'decorationPage', params: { id: id }}">{{name}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllDecorationSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
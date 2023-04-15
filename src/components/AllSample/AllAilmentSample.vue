<template>
    <div class="ailment-card">
        <router-link :to="{ name: 'ailmentPage', params: { id: id }}">{{name}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllAilmentSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
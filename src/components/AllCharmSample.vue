<template>
    <div class="charm-card">
        <router-link :to="{ name: 'charmPage', params: { id: id }}">{{name}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllCharmSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
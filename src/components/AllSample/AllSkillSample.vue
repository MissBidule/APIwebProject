<template>
    <div class="skill-card">
        <router-link :to="{ name: 'skillPage', params: { id: id }}">{{name}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllSkillSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
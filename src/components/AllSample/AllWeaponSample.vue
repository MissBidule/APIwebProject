<template>
    <div class="weapon-card">
        <router-link :to="{ name: 'weaponPage', params: { id: id }}">{{name}} | {{type}}</router-link>
    </div>
  </template>
  
  <script>
      export default {
        name: 'AllWeaponSample',
        props: {
          name: {type: String,  required: true,default:"name not found"},
          type: {type: String, required: true, default: "type undefined"},
          id: {type: Number, required: true, default: 0}
        }
      }
  </script>
  
  <style scoped>
  </style>
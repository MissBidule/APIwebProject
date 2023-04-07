<template>
    <p><router-link :to="{ name: url, params: { id: id }}">
        {{name}} | {{arrayType}}
    </router-link></p>
</template>
  
<script>
    export default {
      name: 'ResultSample',
      props: {
        name: {type: String,  required: true,default:"name not found"},
        arrayType: {type: String, required: true, default: "type undefined"},
        id:{type: Number,  required: true, default:0},
        url: {type: String,  required: true,default:""},
      }
    }
</script>

<style scoped>
  p {
      margin: 0;
      text-decoration: underline;
  }
</style>
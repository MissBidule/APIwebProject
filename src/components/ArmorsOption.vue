<template>
    <div class="gallery-options">
        <input type="text" name="search" :value="search" @input="onSearchChanged" placeholder="Chercher une armure">
        <button v-if="search" @click="cleanSearch">X</button><br>
        <label for="armor-sort">Trier par : </label>
        <select :value="armorsSortType" @input="onArmorsSortTypeChanged" id="armor-sort">
            <option value="ID">Identifiants</option>
            <option value="AZName">Noms de A à Z</option>
            <option value="ZAName">Noms de Z à A</option>
            <option value="AZType">Types de A à Z</option>
            <option value="ZAType">Types de Z à A</option>
        </select>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ArmorsOptions',
    props: {
        search: String,
        armorsSortType: String
    },
    emits: ["update:search", "update:armorsSortType"],
    watch: {
      search: function(newSearch) {
        localStorage.setItem("search", newSearch)
      },
      armorsSortType: function(newArmorsSortType) {
        localStorage.setItem("armorsSortType", newArmorsSortType)
      }
    },
    methods: {
        onSearchChanged(event) {
            this.$emit('update:search', event.target.value)
        },
        onArmorsSortTypeChanged(event) {
            this.$emit('update:armorsSortType', event.target.value)
        },
        cleanSearch: function() {
            this.$emit('update:search', "")
        }
    }
  }
  </script>
  
  <style></style>
<template>
  <div class="gallery-options">
      <input type="text" class="search" :value="search" @input="onSearchChanged" placeholder="Search...">
      <button class="clean-button" v-if="search" @click="cleanSearch">X</button><br>
      <label for="sort">Sort by : </label>
      <select :value="typeSort" @input="onTypeSortChanged" id="sort">
          <option value="ID">ID</option>
          <option value="Name">Names</option>
      </select>
      <button class="sort-button" @click="invertSearch" :value="orderSort">{{orderSort}}</button>
  </div>
</template>

<script>

export default {
  name: 'SortOptions',
  props: {
      search: String,
      typeSort: String,
      orderSort: String
  },
  emits: ["update:search", "update:typeSort", "update:orderSort"],
  watch: {
    search: function(newSearch) {
      localStorage.setItem("search", newSearch)
    },
    typeSort: function(newTypeSort) {
      localStorage.setItem("typeSort", newTypeSort);
    },
    orderSort: function(newOrderSort) {
      localStorage.setItem("orderSort", newOrderSort)
    }
  },
  methods: {
      onSearchChanged(event) {
        this.$emit('update:search', event.target.value)
      },
      onTypeSortChanged(event) {
        this.$emit('update:typeSort', event.target.value)
      },
      invertSearch: function(event) {
        if (event.target.value == "Z-A")
          this.$emit('update:orderSort', "A-Z")
        else
          this.$emit('update:orderSort', "Z-A")
      },
      cleanSearch: function() {
        this.$emit('update:search', "")
      }
  }
}
</script>

<style scoped>
  .gallery-options {
    text-align: center;
    margin-bottom: 1vh;
  }

  input[type=text].search {
    padding: 6px;
    background-image: url('@/assets/rond.png');
    background-position: 0px 50%;
    background-size: 3.5vh;
    background-repeat: no-repeat;
    padding-left: 4.5vh;  
    background-color: rgba(1, 1, 1, 0);/*ddc89e;*/
    border: #694B44 5px double;
    font-size: 1em;
    height: 2.5vh;
    font-family: 'Neucha', cursive;
    width: 10vw;
    margin-bottom: 0.5vh;
  }

  .clean-button, .sort-button, select {
    border:  #694B44 5px double;
    background-color: #ddc89e;
    font-size: 1em;
    cursor: pointer;
    color: #694B44;
    font-family: 'Neucha', cursive;
  }

  input[type=text].search:focus {
    color: #694B44;
    background-color: #ddc89e;
  }

  select {
    margin-right: 0.1vw;
  }

  .clean-button {
    margin-left: 0.1vw;
  }

  @media screen and (max-width: 650px) {
    .gallery-options {
      text-align: left;
      font-size: 1em;
      margin-left: 2vw;
    }

    input[type=text].search {
      font-size: 1em;
      width: 25vw;
    }

    .clean-button, .sort-button, select {
      font-size: 1em;
    }
  }
</style>
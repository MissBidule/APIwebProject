<template>
    <HeaderCard
      :class="active"
    />
      <div class="Decorations-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'decorationsGallery'}">Decorations</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <div v-if="decorationsData[0]" class="gallery">
            <AllDecorationSample v-for="(n,index) in resultsNB" :key="n"
                :name="decorationsOrganizedData[index].name"
                :type="decorationsOrganizedData[index].type"
                :id="decorationsOrganizedData[index].id"
            />
            <div v-if="decorationsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
                <p>Load more...</p>
            </div>
          <div v-if="!decorationsOrganizedData[0]">
            Nothing found for {{search}}
          </div>
        </div>
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
      </div>
    <FooterCard/>
  </template>
    
  <script>
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    import LoadingCard from '@/components/BasicSample/Loading.vue'
    import AllDecorationSample from '@/components/AllSample/AllDecorationSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
  
    import { getAllDecorationsData } from '@/services/api/AllElementsRepository.js'
    
    export default {
      name: 'DecorationsGallery',
      computed: {
        resultsNB: function() {
            return (this.resultsNBasked > this.decorationsOrganizedData.length ? this.decorationsOrganizedData.length : this.resultsNBasked);
        },
        decorationsOrganizedData: function() {
            let data = this.decorationsData;
            let field;
            if (this.typeSort == "Name")
                {field = "name";}
            else
                {field = "id";}
            const reversed = ("Z-A" == this.orderSort);
            const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase());
            const comparator = (a, b) => (field != "id" ? a[field].localeCompare(b[field]) : a[field] - b[field]);
            data = data.filter(filterFunc);
            data = data.sort(comparator);
            if (reversed) data = data.reverse();
            this.initResultsNB();
            return data;
        },
      },
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          AllDecorationSample,
          SortOptions
      },
      data() {
        return {
            active: "object",
            decorationsData: [],
            search: localStorage.getItem("search") || "",
            typeSort: localStorage.getItem("typeSort") || "ID",
            orderSort: localStorage.getItem("orderSort") || "A-Z",
            resultsNBasked: 25
        }
      },
      beforeMount() {
        this.retrieveDecorationsData()
      },
      methods: {
        async retrieveDecorationsData() {
          this.decorationsData = await getAllDecorationsData()
        },
        LoadMore() {
            this.resultsNBasked += 25;
        },
        initResultsNB() {
            this.resultsNBasked = 25;
        }
      }
    }
  </script>
  
  <style>
    .object #object {
        background-color: #896954;
    }
  
    .object #object a {
        background-color: #ddc89e;
    }
  
    .object #object a:hover {
        background-color: #f5e5be;
    }
  </style>
    
  <style scoped>
    .path, .gallery {
        margin-left: 2vw;
        margin-bottom: 1vh;
    }
  
    a {
        text-decoration: none;
    }

    .navigation p {
        margin-top: 2vh;
        cursor: pointer;
        border: #694B44 5px double;
        width: 20vw;
        padding-left: 0.5em;
    }

    .navigation p:hover {
        background-color: #ddc89e;
    }
  
    @media screen and (max-width: 650px) {
    }
  </style>
<template>
    <HeaderCard
      :class="active"
    />
      <div class="Ailments-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'ailmentsGallery'}">Ailments</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <div v-if="ailmentsData[0]" class="gallery">
            <span v-for="(n,index) in resultsNB" :key="n">
                <AllAilmentSample 
                    :key="ailmentsOrganizedData[index].id"
                    :name="ailmentsOrganizedData[index].name"
                    :type="ailmentsOrganizedData[index].type"
                    :id="ailmentsOrganizedData[index].id"
                />
            </span>
            <div v-if="ailmentsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
                <p>Load more...</p>
            </div>
          <div v-if="!ailmentsOrganizedData[0]">
            Nothing found for {{search}}
          </div>
        </div>
        <div v-else class="wait-for-gallery">
                  <img rel="preload" class="picture" src="@/assets/loading.gif"/>
          <h2>Loading...</h2>
        </div>
      </div>
    <FooterCard/>
  </template>
    
  <script>
    import HeaderCard from '@/components/Header.vue'
    import FooterCard from '@/components/Footer.vue'
    import AllAilmentSample from '@/components/AllAilmentSample.vue'
    import SortOptions from '@/components/SortOptions.vue'
  
    import { getAllAilmentsData } from '@/services/api/AllElementsRepository.js'
    
    export default {
      name: 'AilmentsGallery',
      computed: {
        resultsNB: function() {
            return (this.resultsNBasked > this.ailmentsOrganizedData.length ? this.ailmentsOrganizedData.length : this.resultsNBasked);
        },
        ailmentsOrganizedData: function() {
            let data = this.ailmentsData;
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
          AllAilmentSample,
          SortOptions
      },
      data() {
        return {
            active: "object",
            ailmentsData: [],
            search: localStorage.getItem("search") || "",
            typeSort: localStorage.getItem("typeSort") || "ID",
            orderSort: localStorage.getItem("orderSort") || "A-Z",
            resultsNBasked: 25
        }
      },
      beforeMount() {
        this.retrieveAilmentsData()
      },
      methods: {
        async retrieveAilmentsData() {
          this.ailmentsData = await getAllAilmentsData()
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
    .wait-for-gallery {
      width: 100%;
      position: relative;
    }
  
    img.picture {
      position: absolute;
      padding: auto;
      width: 50vw;
      height: auto;
      left: 50%;
      transform: translate(-50%, 0); 
    }
  
    .wait-for-gallery h2 {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0); 
      color: #f5e5be;
      text-shadow: 2px 0 #694B44, -2px 0 #694B44, 0 2px #694B44, 0 -2px #694B44,
              1px 1px #694B44, -1px -1px #694B44, 1px -1px #694B44, -1px 1px #694B44;
    }
  
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
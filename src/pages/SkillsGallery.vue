<template>
    <HeaderCard
      :class="active"
    />
      <div class="Skills-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'skillsGallery'}">Skills</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <div v-if="skillsData[0]" class="gallery">
            <span v-for="(n,index) in resultsNB" :key="n">
                <AllSkillSample 
                    :key="skillsOrganizedData[index].id"
                    :name="skillsOrganizedData[index].name"
                    :type="skillsOrganizedData[index].type"
                    :id="skillsOrganizedData[index].id"
                />
            </span>
            <div v-if="skillsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
                <p>Load more...</p>
            </div>
          <div v-if="!skillsOrganizedData[0]">
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
    import AllSkillSample from '@/components/AllSample/AllSkillSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
  
    import { getAllSkillsData } from '@/services/api/AllElementsRepository.js'
    
    export default {
      name: 'SkillsGallery',
      computed: {
        resultsNB: function() {
            return (this.resultsNBasked > this.skillsOrganizedData.length ? this.skillsOrganizedData.length : this.resultsNBasked);
        },
        skillsOrganizedData: function() {
            let data = this.skillsData;
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
          AllSkillSample,
          SortOptions
      },
      data() {
        return {
            active: "object",
            skillsData: [],
            search: localStorage.getItem("search") || "",
            typeSort: localStorage.getItem("typeSort") || "ID",
            orderSort: localStorage.getItem("orderSort") || "A-Z",
            resultsNBasked: 25
        }
      },
      beforeMount() {
        this.retrieveSkillsData()
      },
      methods: {
        async retrieveSkillsData() {
          this.skillsData = await getAllSkillsData()
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
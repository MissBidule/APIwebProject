<template>
    <HeaderCard
      :class="active"
    />
      <div class="Locations-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'lifeIndex'}">Life</router-link> >> <router-link :to="{ name: 'locationsGallery'}">Location</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <span v-if="locationsData[0]">
            <div class="gallery">
                <div class="item" v-for="(n,index) in resultsNB" :key="n">
                    <AllLocationSample 
                    :key="locationsOrganizedData[index].id"
                    :name="locationsOrganizedData[index].name"
                    :id="locationsOrganizedData[index].id"
                    :img="(ListURL[locationsOrganizedData[index].id-1] != '' ? ListURL[locationsOrganizedData[index].id-1]:ListURL[-1])"
                    />
                </div>
            </div>
            <div v-if="locationsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
              <p>Load more...</p>
            </div>
            <div v-if="!locationsOrganizedData[0]">
                Nothing found for {{search}}
            </div>
        </span>
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
    import AllLocationSample from '@/components/AllSample/AllLocationSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
    import { locationURL } from'@/services/tools.js'
    import { getAllLocationsData } from '@/services/api/AllElementsRepository.js'
    
    export default {
      name: 'LocationsGallery',
      computed: {
        resultsNB: function() {
          return (this.resultsNBasked > this.locationsOrganizedData.length ? this.locationsOrganizedData.length : this.resultsNBasked);
        },
        locationsOrganizedData: function() {
            let data = this.locationsData;
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
          AllLocationSample,
          SortOptions
      },
      data() {
        return {
          active: "life",
          locationsData: [],
          search: localStorage.getItem("search") || "",
          typeSort: localStorage.getItem("typeSort") || "ID",
          orderSort: localStorage.getItem("orderSort") || "A-Z",
          resultsNBasked: 12,
          ListURL: locationURL
        }
      },
      beforeMount() {
        this.retrieveLocationsData()
      },
      methods: {
        async retrieveLocationsData() {
          this.locationsData = await getAllLocationsData()
        },
        LoadMore() {
          this.resultsNBasked += 12;
        },
        initResultsNB() {
          this.resultsNBasked = 12;
        }
      }
    }
  </script>
  
  <style>
    .life #life {
        background-color: #896954;
    }
  
    .life #life a {
        background-color: #ddc89e;
    }
  
    .life #life a:hover {
        background-color: #f5e5be;
    }
  </style>
    
  <style scoped>
    .path, .navigation {
        margin-left: 2vw;
        margin-bottom: 1vh;
    }
  
    a {
        text-decoration: none;
    }
  
    .type-list ul {
      text-align: center;
      padding-left: 0;
      margin-bottom: 1vh;
    }
  
    .type-list ul li{
      display: inline-block;
      background-image: url('@/assets/point.png');
      background-position: 0px 50%;
      background-size: 50%;
      background-repeat: no-repeat;
      padding-left: 4%;
      padding-top: 2%;
      padding-bottom: 2%;
      margin-right: 2%;
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

    .gallery {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .item {
        width: 15em;
    }
  
    @media screen and (max-width: 650px) {
        .type-list ul li{
            padding-left: 8%;
        }

        .item {
            width: 10em;
        }
    }
  </style>
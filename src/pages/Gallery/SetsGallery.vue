<template>
    <HeaderCard
      :class="active"
    />
      <div class="Sets-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'setsGallery'}">Set pieces</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <span v-if="setsData[0]">
            <div class="gallery">
                <div class="item" v-for="(n,index) in resultsNB" :key="n">
                    <AllSetSample 
                    :key="setsOrganizedData[index].id"
                    :name="setsOrganizedData[index].name"
                    :id="setsOrganizedData[index].id"
                    :img="(ListURL[setsOrganizedData[index].id-1] != '' ? ListURL[setsOrganizedData[index].id-1]:ListURL[-1])"
                    />
                </div>
            </div>
            <div v-if="setsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
              <p>Load more...</p>
            </div>
            <div v-if="!setsOrganizedData[0]">
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
    import AllSetSample from '@/components/AllSample/AllSetSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
    import { setURL } from'@/services/tools.js'
    import { getAllArmorSetsData } from '@/services/api/AllElementsRepository.js'
    
    export default {
      name: 'SetsGallery',
      computed: {
        resultsNB: function() {
          return (this.resultsNBasked > this.setsOrganizedData.length ? this.setsOrganizedData.length : this.resultsNBasked);
        },
        setsOrganizedData: function() {
            let data = this.setsData;
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
          AllSetSample,
          SortOptions
      },
      data() {
        return {
          active: "object",
          setsData: [],
          search: localStorage.getItem("search") || "",
          typeSort: localStorage.getItem("typeSort") || "ID",
          orderSort: localStorage.getItem("orderSort") || "A-Z",
          resultsNBasked: 12,
          ListURL: setURL
        }
      },
      beforeMount() {
        this.retrieveSetsData()
      },
      methods: {
        async retrieveSetsData() {
          this.setsData = await getAllArmorSetsData()
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
<template>
    <HeaderCard
      :class="active"
    />
      <div class="Monsters-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'lifeIndex'}">Life</router-link> >> <router-link :to="{ name: 'monstersGallery'}">Monster</router-link> >> <router-link :to="{ name: 'monstersTypeGallery', params: { type: ($route.params.type)}}">{{capitalizeFirstLetterMethod(($route.params.type))}}</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <div v-if="monstersData[0]" class="gallery">
          <AllMonsterSample v-for="(n,index) in resultsNB" :key="n"
            :name="monstersOrganizedData[index].name"
            :id="monstersOrganizedData[index].id"
            :img="(ListURL1[monstersOrganizedData[index].id-1] != '' ? ListURL1[monstersOrganizedData[index].id-1]:ListURL1[-1])"
            :icon="(ListURL2[monstersOrganizedData[index].id-1] != '' ? ListURL2[monstersOrganizedData[index].id-1]:ListURL2[-1])"
          />
          <div v-if="monstersOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
              <p>Load more...</p>
          </div>
          <div v-if="!monstersOrganizedData[0]">
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
    import { useRoute } from 'vue-router'
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    import LoadingCard from '@/components/BasicSample/Loading.vue'
    import AllMonsterSample from '@/components/AllSample/AllMonsterSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
    import { monsterIconURL, monsterImgURL, capitalizeFirstLetter } from '@/services/tools'
    import { getMonsterByType } from '@/services/api/GetElementByType.js'
    
    export default {
      name: 'MonstersGallery',
      computed: {
        resultsNB: function() {
          return (this.resultsNBasked > this.monstersOrganizedData.length ? this.monstersOrganizedData.length : this.resultsNBasked);
        },
        monstersOrganizedData: function() {
            let data = this.monstersData;
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
          AllMonsterSample,
          SortOptions
      },
      data() {
        return {
          active: "life",
          monstersData: [],
          search: localStorage.getItem("search") || "",
          typeSort: localStorage.getItem("typeSort") || "ID",
          orderSort: localStorage.getItem("orderSort") || "A-Z",
          resultsNBasked: 12,
          ListURL1 : monsterImgURL,
          ListURL2 : monsterIconURL
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.type;
        this.retrieveMonstersData(route.params.type);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.name != from.params.name)
        {
            this.resultsNBasked = 12;
            this.armorsTypeData = [];
            this.activeSearch = to.params.name;
            this.retrieveMonstersData(to.params.name);
        }
      },
      methods: {
        async retrieveMonstersData(type) {
          this.monstersData = await getMonsterByType(type)
        },
        LoadMore() {
          this.resultsNBasked += 12;
        },
        initResultsNB() {
          this.resultsNBasked = 12;
        },
        capitalizeFirstLetterMethod(string) {
          return capitalizeFirstLetter(string)
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
    .path, .gallery {
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
      background-image: url('.././assets/point.png');
      background-position: 0px 50%;
      background-size: 50%;
      background-repeat: no-repeat;
      padding-left: 2em;
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
        align-items: flex-end;
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
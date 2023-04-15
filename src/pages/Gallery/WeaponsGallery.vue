<template>
    <HeaderCard
      :class="active"
    />
      <div class="Weapons-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'weaponsGallery'}">Weapon pieces</router-link>
        </div>
        <div class="type-list">
          <ul>
            <li v-for="(n,index) in listType.length" :key="n">
            <router-link :to="{ name: 'weaponsTypeGallery', params: { type: listType[index]}}">{{listName[index]}}</router-link>
          </li>
          </ul>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <div v-if="weaponsData[0]" class="gallery">
          <span v-for="(n,index) in resultsNB" :key="n">
            <AllWeaponSample 
              :key="weaponsOrganizedData[index].id"
              :name="weaponsOrganizedData[index].name"
              :type="weaponsOrganizedData[index].typeName"
              :id="weaponsOrganizedData[index].id"
            />
          </span>
          <div v-if="weaponsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
              <p>Load more...</p>
          </div>
          <div v-if="!weaponsOrganizedData[0]">
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
    import AllWeaponSample from '@/components/AllSample/AllWeaponSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
    import { weaponType, weaponName } from '@/services/tools'
  
    import { getAllWeaponsData } from '@/services/api/AllElementsRepository.js'
    
    export default {
      name: 'WeaponsGallery',
      computed: {
        resultsNB: function() {
          return (this.resultsNBasked > this.weaponsOrganizedData.length ? this.weaponsOrganizedData.length : this.resultsNBasked);
        },
        weaponsOrganizedData: function() {
            let data = this.weaponsData;
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
          AllWeaponSample,
          SortOptions
      },
      data() {
        return {
            active: "object",
            weaponsData: [],
            search: localStorage.getItem("search") || "",
            typeSort: localStorage.getItem("typeSort") || "ID",
            orderSort: localStorage.getItem("orderSort") || "A-Z",
            resultsNBasked: 25,
            listType: weaponType,
            listName: weaponName
        }
      },
      beforeMount() {
        this.retrieveWeaponsData()
      },
      methods: {
        async retrieveWeaponsData() {
          this.weaponsData = await getAllWeaponsData()
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
  
    .type-list ul {
      text-align: center;
      padding-left: 0;
      margin-bottom: 1vh;
    }
  
    .type-list ul li{
      display: inline-block;
      background-image: url('@/assets/point.png');
      background-position: 0px 50%;
      background-size: 2em;
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
  
    @media screen and (max-width: 650px) {
      .type-list ul li{
        padding-left: 8%;
      }
    }
  </style>
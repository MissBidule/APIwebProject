<template>
  <HeaderCard
    :class="active"
  />
    <div class="Armors-gallery">
      <div class="path">
        <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'armorsGallery'}">Armor pieces</router-link>
      </div>
      <div class="type-list">
        <ul>
          <li><router-link :to="{ name: 'armorsTypeGallery', params: { type: 'head'}}">Head</router-link></li>
          <li><router-link :to="{ name: 'armorsTypeGallery', params: { type: 'chest'}}">Chest</router-link></li>
          <li><router-link :to="{ name: 'armorsTypeGallery', params: { type: 'gloves'}}">Gloves</router-link></li>
          <li><router-link :to="{ name: 'armorsTypeGallery', params: { type: 'waist'}}">Waist</router-link></li>
          <li><router-link :to="{ name: 'armorsTypeGallery', params: { type: 'legs'}}">Legs</router-link></li>
        </ul>
      </div>
      <SortOptions 
        v-model:search="search" 
        v-model:typeSort="typeSort" 
        v-model:orderSort="orderSort"
      />
      <div v-if="armorsData[0]" class="gallery">
        <span v-for="(n,index) in resultsNB" :key="n">
          <AllArmorSample 
            :key="armorsOrganizedData[index].id"
            :name="armorsOrganizedData[index].name"
            :type="armorsOrganizedData[index].type"
            :id="armorsOrganizedData[index].id"
          />
        </span>
        <div v-if="armorsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
            <p>Load more...</p>
        </div>
        <div v-if="!armorsOrganizedData[0]">
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
  import AllArmorSample from '@/components/AllArmorSample.vue'
  import SortOptions from '@/components/SortOptions.vue'

  import { getAllArmorsData } from '@/services/api/AllElementsRepository.js'
  
  export default {
    name: 'ArmorsGallery',
    computed: {
      resultsNB: function() {
        return (this.resultsNBasked > this.armorsOrganizedData.length ? this.armorsOrganizedData.length : this.resultsNBasked);
      },
      armorsOrganizedData: function() {
          let data = this.armorsData;
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
        AllArmorSample,
        SortOptions
    },
    data() {
      return {
        active: "object",
        armorsData: [],
        search: localStorage.getItem("search") || "",
        typeSort: localStorage.getItem("typeSort") || "ID",
        orderSort: localStorage.getItem("orderSort") || "A-Z",
        resultsNBasked: 25
      }
    },
    beforeMount() {
      this.retrieveArmorsData()
    },
    methods: {
      async retrieveArmorsData() {
        this.armorsData = await getAllArmorsData()
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

  @media screen and (max-width: 650px) {
    .type-list ul li{
      padding-left: 8%;
    }
  }
</style>
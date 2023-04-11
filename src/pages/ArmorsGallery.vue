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
          <li v-for="(n,index) in listType.length" :key="n">
            <router-link :to="{ name: 'armorsTypeGallery', params: { type: listType[index]}}">{{capitalizeFirstLetterMethod(listType[index])}}</router-link>
          </li>
        </ul>
      </div>
      <SortOptions 
        v-model:search="search" 
        v-model:typeSort="typeSort" 
        v-model:orderSort="orderSort"
      />
      <div v-if="armorsData[0]" class="gallery">
        <AllArmorSample v-for="(n,index) in resultsNB" :key="n"
          :name="armorsOrganizedData[index].name"
          :type="capitalizeFirstLetterMethod(armorsOrganizedData[index].type)"
          :id="armorsOrganizedData[index].id"
        />
        <div v-if="armorsOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
            <p>Load more...</p>
        </div>
        <div v-if="!armorsOrganizedData[0]">
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
  import AllArmorSample from '@/components/AllSample/AllArmorSample.vue'
  import SortOptions from '@/components/BasicSample/SortOptions.vue'
  import { armorType, capitalizeFirstLetter } from '@/services/tools'

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
        LoadingCard,
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
        resultsNBasked: 25,
        listType: armorType
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
      },
      capitalizeFirstLetterMethod(string) {
        return capitalizeFirstLetter(string)
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
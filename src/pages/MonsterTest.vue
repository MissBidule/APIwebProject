<template>
    <div class="Armors-gallery">
      <ArmorsOptions v-model:search="search" v-model:armorsSortType="armorsSortType" />
      <div v-if="armorsData[1]" class="gallery">
        <router-link :to="{ name: 'monsterPage', params: { id: Number($route.params.id)+1}}">Go to next page</router-link>
        <h3>{{$route.params.id}}</h3>
				<ArmorCard 
            v-for="armor in armorsOrganizedData"
            :key="armor.id"
            :name="armor.type"
            :type="armor.type"
            :pictureUrlM="armor.assets?.imageMale"
            :pictureUrlF="armor.assets?.imageFemale"
            />
      </div>
      <div v-else class="wait-for-gallery">
				<img rel="preload" class="picture" src=".././assets/loading.jpg"/>
      </div>
    </div>
  </template>
  
  <script>
  import ArmorCard from '@/components/ArmorSample.vue'
  import ArmorsOptions from '@/components/ArmorsOption.vue'

  import { getAllArmorsData } from '@/services/api/ArmorsRepository.js'
  
  export default {
    name: 'MonstersGallery',
    computed: {
      armorsOrganizedData: function() {
        let data = this.armorsData;
        let field;
        if (this.armorsSortType === "AZName" || this.armorsSortType === "ZAName")
          {field = "name";}
        else if (this.armorsSortType === "AZType" || this.armorsSortType === "ZAType") 
          {field = "type";}
        else if (this.armorsSortType === "ID") 
          {field = "id";}
        const reversed = ["ZAName","ZAType"].includes(this.armorsSortType);
        console.log(reversed);
        const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase());
        console.log(this.armorsData[0].name.toLowerCase().includes(this.search.toLowerCase()))
        const comparator = (a, b) => (field !== "id" ? a[field].localeCompare(b[field]) : a[field] - b[field]);
        data = data.filter(filterFunc);
        data = data.sort(comparator);
        if (reversed) data = data.reverse();
      return data;
      }
    },
    components: {
        ArmorCard,
        ArmorsOptions
    },
    data() {
      return {
        armorsData: [],
        search: localStorage.getItem("search") || "",
        armorsSortType: localStorage.getItem("armorsSortType") || "ID"
      }
    },
    beforeMount() {
      this.retrieveArmorsData()
    },
    methods: {
      async retrieveArmorsData() {
        this.armorsData = await getAllArmorsData(1)
      }
    }
  }
  </script>
  
  <style></style>
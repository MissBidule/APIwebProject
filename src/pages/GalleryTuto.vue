<template>
    <HeaderCard/>
    <FooterCard/>
      <div class="Armors-gallery">
        <SortOptions v-model:search="search" v-model:armorsSortType="armorsSortType" />
        <div v-if="armorsData[0]" class="gallery">
                  <ArmorCard 
              v-for="armor in armorsOrganizedData"
              :key="armor.id"
              :name="armor.name"
              :type="armor.type"
              :pictureUrlM="armor.assets?.imageMale"
              :pictureUrlF="armor.assets?.imageFemale"
              />
        </div>
        <div v-else class="wait-for-gallery">
                  <img rel="preload" class="picture" src="@/assets/loading.gif"/>
        </div>
      </div>
    </template>
    
    <script>
    import HeaderCard from '@/components/Header.vue'
    import FooterCard from '@/components/Footer.vue'
    import ArmorCard from '@/components/ArmorSample.vue'
    import SortOptions from '@/components/SortOptions.vue'
  
    import { getAllArmorsData } from '@/services/api/ArmorsRepository.js'
    
    export default {
      name: 'ArmorsGallery',
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
          HeaderCard,
          FooterCard,
          ArmorCard,
          SortOptions
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
    
  <style>
  </style>
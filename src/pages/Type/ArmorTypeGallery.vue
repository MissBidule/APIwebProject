<template>
    <HeaderCard
      :class="active"
    />
      <div class="Armor-type-gallery">
        <div class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'armorsGallery'}">Armor pieces</router-link> >> <router-link :to="{ name: 'armorsTypeGallery', params: { type: ($route.params.type)}}">{{capitalizeFirstLetterMethod(($route.params.type))}}</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <span v-if="armorsTypeData[0]">
            <div class="gallery">
                <div class="item" v-for="(n,index) in resultsNB" :key="n">
                    <ArmorTypeSample
                    :key="armorTypeOrganizedData[index].id"
                    :name="armorTypeOrganizedData[index].name"
                    :id="armorTypeOrganizedData[index].id"
                    :img1="(armorTypeOrganizedData[index].assets ?(armorTypeOrganizedData[index].assets.imageMale != null ? armorTypeOrganizedData[index].assets.imageMale : imgM) : imgM)"
                    :img2="(armorTypeOrganizedData[index].assets ? (armorTypeOrganizedData[index].assets.imageFemale != null ? armorTypeOrganizedData[index].assets.imageFemale : imgF) : imgF)"
                    />
                </div>
            </div>
            <div v-if="armorTypeOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
              <p>Load more...</p>
            </div>
            <div v-if="!armorTypeOrganizedData[0]">
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
    import { useRoute } from 'vue-router'
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    import LoadingCard from '@/components/BasicSample/Loading.vue'
    import ArmorTypeSample from '@/components/TypeSample/ArmorTypeSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
    import { capitalizeFirstLetter } from '@/services/tools'
    import { getArmorByType } from '@/services/api/GetElementByType.js'
    
    import imageMhead from "@/assets/placeholder_headgear_male.png"
    import imageFhead from "@/assets/placeholder_headgear_female.png"
    import imageMchest from "@/assets/placeholder_armor_male.png"
    import imageFchest from "@/assets/placeholder_armor_female.png"
    import imageMgloves from "@/assets/placeholder_gloves_male.png"
    import imageFgloves from "@/assets/placeholder_gloves_female.png"
    import imageMwaist from "@/assets/placeholder_faulds_male.png"
    import imageFwaist from "@/assets/placeholder_faulds_female.png"
    import imageMlegs from "@/assets/placeholder_leggings_male.png"
    import imageFlegs from "@/assets/placeholder_leggings_female.png"

    export default {
      name: 'ArmorTypeGallery',
      computed: {
        resultsNB: function() {
          return (this.resultsNBasked > this.armorTypeOrganizedData.length ? this.armorTypeOrganizedData.length : this.resultsNBasked);
        },
        armorTypeOrganizedData: function() {
            let data = this.armorsTypeData;
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
          ArmorTypeSample,
          SortOptions
      },
      data() {
        return {
          active: "object",
          armorsTypeData: [],
          search: localStorage.getItem("search") || "",
          typeSort: localStorage.getItem("typeSort") || "ID",
          orderSort: localStorage.getItem("orderSort") || "A-Z",
          resultsNBasked: 12,
          imgM: "",
          imgF: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.type;
        this.retrieveArmorTypeData(route.params.type);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.name != from.params.name)
        {
            this.resultsNBasked = 25;
            this.armorsTypeData = [];
            this.activeSearch = to.params.name;
            this.retrieveArmorTypeData(to.params.name);
        }
      },
      methods: {
        async retrieveArmorTypeData(type) {
          this.armorsTypeData = await getArmorByType(type)
          if (!this.armorsTypeData || this.armorsTypeData.length == 0)
            this.$router.push({ name: 'error'});
          if (type=="head") {
            this.imgM = imageMhead;
            this.imgF = imageFhead;
          }
          if (type=="chest") {
            this.imgM = imageMchest;
            this.imgF = imageFchest;
          }
          if (type=="gloves") {
            this.imgM = imageMgloves;
            this.imgF = imageFgloves;
          }
          if (type=="waist") {
            this.imgM = imageMwaist;
            this.imgF = imageFwaist;
          }
          if (type=="legs") {
            this.imgM = imageMlegs;
            this.imgF = imageFlegs;
          }
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
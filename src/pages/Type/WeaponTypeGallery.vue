<template>
    <HeaderCard
      :class="active"
    />
      <div class="Weapon-type-gallery">
        <div v-if="weaponsTypeData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'weaponsGallery'}">Weapon pieces</router-link> >> <router-link :to="{ name: 'weaponsTypeGallery', params: { type: ($route.params.type)}}">{{weaponsTypeData[0]?.typeName}}</router-link>
        </div>
        <SortOptions 
          v-model:search="search" 
          v-model:typeSort="typeSort" 
          v-model:orderSort="orderSort"
        />
        <span v-if="weaponsTypeData[0]">
            <div class="gallery">
                <div class="item" v-for="(n,index) in resultsNB" :key="n">
                    <WeaponTypeSample
                    :key="weaponTypeOrganizedData[index].id"
                    :name="weaponTypeOrganizedData[index].name"
                    :id="weaponTypeOrganizedData[index].id"
                    :img="(weaponTypeOrganizedData[index].assets ?(weaponTypeOrganizedData[index].assets.image != null ? weaponTypeOrganizedData[index].assets.image : imgW) : imgW)"
                    :icon="(weaponTypeOrganizedData[index].assets ?(weaponTypeOrganizedData[index].assets.icon != null ? weaponTypeOrganizedData[index].assets.icon : weaponTypeOrganizedData[-1]) : weaponTypeOrganizedData[-1])"
                    />
                </div>
            </div>
            <div v-if="weaponTypeOrganizedData.length > resultsNBasked" @click="LoadMore" class="navigation">
              <p>Load more...</p>
            </div>
            <div v-if="!weaponTypeOrganizedData[0]">
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
    import WeaponTypeSample from '@/components/TypeSample/WeaponTypeSample.vue'
    import SortOptions from '@/components/BasicSample/SortOptions.vue'
    import { getWeaponByType } from '@/services/api/GetElementByType.js'
    import { weaponType, defaultWeaponURL } from '@/services/tools.js'
    
    export default {
      name: 'WeaponTypeGallery',
      computed: {
        resultsNB: function() {
          return (this.resultsNBasked > this.weaponTypeOrganizedData.length ? this.weaponTypeOrganizedData.length : this.resultsNBasked);
        },
        weaponTypeOrganizedData: function() {
            let data = this.weaponsTypeData;
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
          WeaponTypeSample,
          SortOptions
      },
      data() {
        return {
          active: "object",
          weaponsTypeData: [],
          search: localStorage.getItem("search") || "",
          typeSort: localStorage.getItem("typeSort") || "ID",
          orderSort: localStorage.getItem("orderSort") || "A-Z",
          resultsNBasked: 12,
          imgW: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.type;
        this.retrieveWeaponTypeData(route.params.type);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.name != from.params.name)
        {
            this.resultsNBasked = 25;
            this.weaponsTypeData = [];
            this.activeSearch = to.params.name;
            this.retrieveWeaponTypeData(to.params.name);
        }
      },
      methods: {
        async retrieveWeaponTypeData(type) {
          this.weaponsTypeData = await getWeaponByType(type)
          if (!this.weaponsTypeData || this.weaponsTypeData.length == 0)
            this.$router.push({ name: 'error'});
          var index = weaponType.findIndex((item) => item == this.weaponsTypeData[0].type);
          this.imgW = defaultWeaponURL[index];
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
<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="locationsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'lifeIndex'}">Life</router-link> >> <router-link :to="{ name: 'locationsGallery'}">Locations</router-link> >> <router-link :to="{ name: 'locationPage', params: { id: locationsData[0].id }}">{{locationsData[0].name}}</router-link>
        </div>
        <LocationSample v-if="locationsData[0]"
        :name="locationsData[0].name"
        :img="(ListURL[locationsData[0].id-1] != '' ? ListURL[locationsData[0].id-1]:ListURL[-1])"
        :zoneCount="locationsData[0].zoneCount"
        :camps="locationsData[0].camps"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="locationsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 14" @click="navigate" class="navigation next">
                <p>Next</p>
            </div>
        </div>
    </div>
    <FooterCard/>
</template>
    
<script>
    import { useRoute } from 'vue-router'
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    import LoadingCard from '@/components/BasicSample/Loading.vue'
    import LocationSample from '@/components/UnitSample/LocationSample.vue'
    import { locationURL } from'@/services/tools.js'
    import { getLocationById } from '@/services/api/GetElementById.js'
    
    export default {
      name: 'LocationPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          LocationSample
      },
      data() {
        return {
          active: "life",
          locationsData: [],
          activePage: "",
          navigateClass: "",
          ListURL: locationURL
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveLocationData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.locationsData = [];
            this.activeSearch = to.params.id;
            this.retrieveLocationData(to.params.id);
        }
      },
      methods: {
        async retrieveLocationData(id) {
            this.locationsData = await getLocationById(id)
            if (!this.locationsData || this.locationsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 14)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            this.$router.push({ name: 'locationPage', params: { id: newId}});
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
    .path a {
        text-decoration: none;
    }

    .path {
        margin-left: 2vw;
    }
    .navigate {
        display: flex;
        justify-content: space-between;
        margin: 2em;
    }

    .navigate-right {
        display: flex;
        justify-content: flex-end;
        margin: 2em;
    }

    .navigate-left {
        display: flex;
        justify-content: flex-start;
        margin: 2em;
    }

    .navigation p {
        margin-top: 2vh;
        cursor: pointer;
        border: #694B44 5px double;
        width: 4em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    } 

    .next {
        text-align: right;
    }
</style>
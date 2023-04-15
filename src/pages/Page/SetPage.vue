<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="setsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'setsGallery'}">Sets</router-link> >> <router-link :to="{ name: 'setPage', params: { id: setsData[0].id }}">{{setsData[0].name}}</router-link>
        </div>
        <SetSample v-if="setsData[0]"
        :name="setsData[0].name"
        :rank="setsData[0].rank"
        :img="(ListURL[setsData[0].id-1] != '' ? ListURL[setsData[0].id-1]:ListURL[-1])"
        :bonus="setsData[0].bonus"
        :pieces="setsData[0].pieces"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="setsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 60" @click="navigate" class="navigation next">
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
    import SetSample from '@/components/UnitSample/SetSample.vue'
    import { setURL } from'@/services/tools.js'
    import { getArmorSetById } from '@/services/api/GetElementById.js'
    import { missingSet } from '@/services/tools.js'
    
    export default {
      name: 'SetPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          SetSample
      },
      data() {
        return {
          active: "object",
          setsData: [],
          activePage: "",
          navigateClass: "",
          ListURL: setURL
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveSetData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.setsData = [];
            this.activeSearch = to.params.id;
            this.retrieveSetData(to.params.id);
        }
      },
      methods: {
        async retrieveSetData(id) {
            this.setsData = await getArmorSetById(id)
            if (!this.setsData || this.setsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 372)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingSet.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'setPage', params: { id: newId}});
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
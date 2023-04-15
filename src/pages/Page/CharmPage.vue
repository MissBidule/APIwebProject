<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="charmsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'charmsGallery'}">Charms</router-link> >> <router-link :to="{ name: 'charmPage', params: { id: charmsData[0].id }}">{{charmsData[0].name}}</router-link>
        </div>
        <CharmSample v-if="charmsData[0]"
        :name="charmsData[0].name"
        :ranks="charmsData[0].ranks"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="charmsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 234" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 342" @click="navigate" class="navigation next">
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
    import CharmSample from '@/components/UnitSample/CharmSample.vue'
    import { getCharmById } from '@/services/api/GetElementById.js'
    import { missingCharm } from '@/services/tools.js'
    
    export default {
      name: 'CharmPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          CharmSample
      },
      data() {
        return {
          active: "object",
          charmsData: [],
          activePage: "",
          navigateClass: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveCharmData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.charmsData = [];
            this.activeSearch = to.params.id;
            this.retrieveCharmData(to.params.id);
        }
      },
      methods: {
        async retrieveCharmData(id) {
            this.charmsData = await getCharmById(id)
            if (!this.charmsData || this.charmsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 234)
                this.navigateClass = "navigate-right";
            else if (id == 342)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingCharm.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'charmPage', params: { id: newId}});
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
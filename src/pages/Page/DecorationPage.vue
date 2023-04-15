<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="decorationsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'decorationsGallery'}">Decorations</router-link> >> <router-link :to="{ name: 'decorationPage', params: { id: decorationsData[0].id }}">{{decorationsData[0].name}}</router-link>
        </div>
        <DecorationSample v-if="decorationsData[0]"
        :name="decorationsData[0].name"
        :rarity="decorationsData[0].rarity"
        :skills="decorationsData[0].skills"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="decorationsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 405" @click="navigate" class="navigation next">
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
    import DecorationSample from '@/components/UnitSample/DecorationSample.vue'
    import { getDecorationById } from '@/services/api/GetElementById.js'
    
    export default {
      name: 'DecorationPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          DecorationSample
      },
      data() {
        return {
          active: "object",
          decorationsData: [],
          activePage: "",
          navigateClass: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveDecorationData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.decorationsData = [];
            this.activeSearch = to.params.id;
            this.retrieveDecorationData(to.params.id);
        }
      },
      methods: {
        async retrieveDecorationData(id) {
            this.decorationsData = await getDecorationById(id)
            if (!this.decorationsData || this.decorationsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 405)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            this.$router.push({ name: 'decorationPage', params: { id: newId}});
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
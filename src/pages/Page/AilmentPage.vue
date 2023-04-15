<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="ailmentsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'lifeIndex'}">Life</router-link> >> <router-link :to="{ name: 'ailmentsGallery'}">Ailments</router-link> >> <router-link :to="{ name: 'ailmentPage', params: { id: ailmentsData[0].id }}">{{ailmentsData[0].name}}</router-link>
        </div>
        <AilmentSample v-if="ailmentsData[0]"
        :name="ailmentsData[0].name"
        :description="ailmentsData[0].description"
        :recoveryActions="ailmentsData[0].recovery.actions"
        :recoveryItems="ailmentsData[0].recovery.items"
        :protectionSkills="ailmentsData[0].protection.skills"
        :protectionItems="ailmentsData[0].protection.items"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="ailmentsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 15" @click="navigate" class="navigation next">
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
    import AilmentSample from '@/components/UnitSample/AilmentSample.vue'
    import { getAilmentById } from '@/services/api/GetElementById.js'
    
    export default {
      name: 'AilmentPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          AilmentSample
      },
      data() {
        return {
          active: "life",
          ailmentsData: [],
          activePage: "",
          navigateClass: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveAilmentData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.ailmentsData = [];
            this.activeSearch = to.params.id;
            this.retrieveAilmentData(to.params.id);
        }
      },
      methods: {
        async retrieveAilmentData(id) {
            this.ailmentsData = await getAilmentById(id)
            if (!this.ailmentsData || this.ailmentsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 15)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            this.$router.push({ name: 'ailmentPage', params: { id: newId}});
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
        margin-left: 2em;
        margin-right: 2em;
    }

    .navigate-right {
        display: flex;
        justify-content: flex-end;
        margin-right: 2em;
    }

    .navigate-left {
        display: flex;
        justify-content: flex-start;
        margin-left: 2em;
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
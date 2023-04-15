<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="skillsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'skillsGallery'}">Skills</router-link> >> <router-link :to="{ name: 'skillPage', params: { id: skillsData[0].id }}">{{skillsData[0].name}}</router-link>
        </div>
        <SkillSample v-if="skillsData[0]"
        :name="skillsData[0].name"
        :description="skillsData[0].description"
        :ranks="skillsData[0].ranks"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="skillsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 185" @click="navigate" class="navigation next">
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
    import SkillSample from '@/components/UnitSample/SkillSample.vue'
    import { getSkillById } from '@/services/api/GetElementById.js'
    import { missingSkill } from '@/services/tools.js'
    
    export default {
      name: 'SkillPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          SkillSample
      },
      data() {
        return {
          active: "object",
          skillsData: [],
          activePage: "",
          navigateClass: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveSkillData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.skillsData = [];
            this.activeSearch = to.params.id;
            this.retrieveSkillData(to.params.id);
        }
      },
      methods: {
        async retrieveSkillData(id) {
            this.skillsData = await getSkillById(id)
            if (!this.skillsData || this.skillsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 185)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingSkill.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'skillPage', params: { id: newId}});
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
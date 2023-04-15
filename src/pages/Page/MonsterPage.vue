<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="monstersData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'lifeIndex'}">Life</router-link> >> <router-link :to="{ name: 'monstersGallery'}">Monsters</router-link> >> <router-link :to="{ name: 'monsterPage', params: { id: monstersData[0].id }}">{{monstersData[0].name}}</router-link>
        </div>
        <MonsterSample v-if="monstersData[0]"
        :img="(ListURL1[monstersData[0].id-1] != '' ? ListURL1[monstersData[0].id-1]:ListURL1[-1])"
        :icon="(ListURL2[monstersData[0].id-1] != '' ? ListURL2[monstersData[0].id-1]:ListURL2[-1])"
        :name="monstersData[0].name"
        :description="monstersData[0].description"
        :type="capitalizeFirstLetterMethod(monstersData[0].type)"
        :species="capitalizeFirstLetterMethod(monstersData[0].species)"
        :elements="monstersData[0].elements"
        :ailments="monstersData[0].ailments"
        :resistances="monstersData[0].resistances"
        :weaknesses="monstersData[0].weaknesses"
        :locations="monstersData[0].locations"
        :rewards="monstersData[0].rewards"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="monstersData[0]" :class="navigateClass">
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
    import MonsterSample from '@/components/UnitSample/MonsterSample.vue'
    import { monsterIconURL, monsterImgURL, capitalizeFirstLetter } from '@/services/tools'
    import { getMonsterById } from '@/services/api/GetElementById.js'
    import { missingMonster } from '@/services/tools.js'
    
    export default {
      name: 'MonsterPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          MonsterSample
      },
      data() {
        return {
          active: "life",
          monstersData: [],
          activePage: "",
          navigateClass: "",
          ListURL1: monsterImgURL,
          ListURL2: monsterIconURL
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveMonsterData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.monstersData = [];
            this.activeSearch = to.params.id;
            this.retrieveMonsterData(to.params.id);
        }
      },
      methods: {
        async retrieveMonsterData(id) {
            this.monstersData = await getMonsterById(id)
            if (!this.monstersData || this.monstersData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 60)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingMonster.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'monsterPage', params: { id: newId}});
        },
        capitalizeFirstLetterMethod(string) {
            return capitalizeFirstLetter(string);
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
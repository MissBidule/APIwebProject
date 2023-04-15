<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="weaponsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'weaponsGallery'}">Weapons</router-link> >> <router-link :to="{ name: 'weaponsTypeGallery', params: { type: (weaponsData[0].type)}}">{{weaponsData[0]?.typeName}}</router-link> >> <router-link :to="{ name: 'weaponPage', params: { id: weaponsData[0].id }}">{{weaponsData[0].name}}</router-link>
        </div>
        <WeaponSample v-if="weaponsData[0]"
        :name="weaponsData[0].name"
        :type="weaponsData[0].type"
        :icon="(weaponsData[0].assets ?(weaponsData[0].assets.icon != null ? weaponsData[0].assets.icon : weaponsData[-1]) : weaponsData[-1])"
        :img="(weaponsData[0].assets ?(weaponsData[0].assets.image != null ? weaponsData[0].assets.image : imgW) : imgW)"
        :rarity="weaponsData[0].rarity"
        :atk="weaponsData[0].attack.display"
        :elements="weaponsData[0].elements"
        :crafting="weaponsData[0].crafting"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="weaponsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 1306" @click="navigate" class="navigation next">
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
    import WeaponSample from '@/components/UnitSample/WeaponSample.vue'
    import { getWeaponAllNamesById } from '@/services/api/GetElementById.js'
    import { missingWeapon } from '@/services/tools.js'
    import { weaponType, defaultWeaponURL } from '@/services/tools.js'
    
    export default {
      name: 'WeaponPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          WeaponSample
      },
      data() {
        return {
          active: "object",
          weaponsData: [],
          activePage: "",
          navigateClass: "",
          imgW: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveWeaponData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.weaponsData = [];
            this.activeSearch = to.params.id;
            this.retrieveWeaponData(to.params.id);
        }
      },
      methods: {
        async retrieveWeaponData(id) {
            this.weaponsData = await getWeaponAllNamesById(id)
            if (!this.weaponsData || this.weaponsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 60)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
            var index = weaponType.findIndex((item) => item == this.weaponsData[0].type);
            this.imgW = defaultWeaponURL[index];
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingWeapon.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'weaponPage', params: { id: newId}});
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
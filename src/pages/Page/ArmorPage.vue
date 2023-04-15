<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="armorsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'armorsGallery'}">Armor pieces</router-link> >> <router-link :to="{ name: 'armorsTypeGallery', params: { type: armorsData[0].type }}">{{capitalizeFirstLetterMethod((armorsData[0].type))}}</router-link> >> <router-link :to="{ name: 'armorPage', params: { id: armorsData[0].id }}">{{armorsData[0].name}}</router-link>
        </div>
        <ArmorSample v-if="armorsData[0]"
        :name="armorsData[0].name"
        :type="armorsData[0].type"
        :img1="(armorsData[0].assets ?(armorsData[0].assets.imageMale != null ? armorsData[0].assets.imageMale : imgM) : imgM)"
        :img2="(armorsData[0].assets ? (armorsData[0].assets.imageFemale != null ? armorsData[0].assets.imageFemale : imgF) : imgF)"
        :rank="armorsData[0].rank"
        :rarity="armorsData[0].rarity"
        :defense="armorsData[0].defense"
        :resistances="armorsData[0].resistances"
        :skills="armorsData[0].skills"
        :materials="armorsData[0].crafting.materials"
        :armorSet="armorsData[0].armorSet"
        :imgAS="(ListURL[armorsData[0].armorSet.id-1] != '' ? ListURL[armorsData[0].armorSet.id-1]:ListURL[-1])"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="armorsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 1688" @click="navigate" class="navigation next">
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
    import ArmorSample from '@/components/UnitSample/ArmorSample.vue'
    import { getArmorAndSetById } from '@/services/api/GetElementById.js'
    import { capitalizeFirstLetter } from '@/services/tools'
    import { missingArmor, setURL } from '@/services/tools.js'

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
      name: 'ArmorPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          ArmorSample
      },
      data() {
        return {
          active: "object",
          armorsData: [],
          activePage: "",
          navigateClass: "",
          imgM: "",
          imgF: "",
          ListURL: setURL
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveArmorData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.armorsData = [];
            this.activeSearch = to.params.id;
            this.retrieveArmorData(to.params.id);
        }
      },
      methods: {
        async retrieveArmorData(id) {
            this.armorsData = await getArmorAndSetById(id)
            if (!this.armorsData || this.armorsData.length == 0)
                this.$router.push({ name: 'error'});
            if (this.armorsData[0].type=="head") {
                this.imgM = imageMhead;
                this.imgF = imageFhead;
            }
            if (this.armorsData[0].type=="chest") {
                this.imgM = imageMchest;
                this.imgF = imageFchest;
            }
            if (this.armorsData[0].type=="gloves") {
                this.imgM = imageMgloves;
                this.imgF = imageFgloves;
            }
            if (this.armorsData[0].type=="waist") {
                this.imgM = imageMwaist;
                this.imgF = imageFwaist;
            }
            if (this.armorsData[0].type=="legs") {
                this.imgM = imageMlegs;
                this.imgF = imageFlegs;
            }
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 1688)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingArmor.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'armorPage', params: { id: newId}});
        },
        capitalizeFirstLetterMethod(string) {
            return capitalizeFirstLetter(string);
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
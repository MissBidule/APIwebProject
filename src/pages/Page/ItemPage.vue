<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <div v-if="itemsData[0]" class="path">
          <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link> >> <router-link :to="{ name: 'itemsGallery'}">Items</router-link> >> <router-link :to="{ name: 'itemPage', params: { id: itemsData[0].id }}">{{itemsData[0].name}}</router-link>
        </div>
        <ItemSample v-if="itemsData[0]"
        :name="itemsData[0].name"
        :rarity="itemsData[0].rarity"
        :description="itemsData[0].description"
        :carryLimit="itemsData[0].carryLimit"
        :value="itemsData[0].value"
        />
        <div v-else class="wait-for-gallery">
            <LoadingCard/>
        </div>
        <div v-if="itemsData[0]" :class="navigateClass">
            <div v-if="$route.params.id > 1" @click="navigate" class="navigation">
                <p>Previous</p>
            </div>
            <div v-if="$route.params.id < 1204" @click="navigate" class="navigation next">
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
    import ItemSample from '@/components/UnitSample/ItemSample.vue'
    import { getItemById } from '@/services/api/GetElementById.js'
    import { missingItem } from '@/services/tools.js'
    
    export default {
      name: 'ItemPage',
      components: {
          HeaderCard,
          FooterCard,
          LoadingCard,
          ItemSample
      },
      data() {
        return {
          active: "object",
          itemsData: [],
          activePage: "",
          navigateClass: ""
        }
      },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.id;
        this.retrieveItemData(route.params.id);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.id != from.params.id)
        {
            this.itemsData = [];
            this.activeSearch = to.params.id;
            this.retrieveItemData(to.params.id);
        }
      },
      methods: {
        async retrieveItemData(id) {
            this.itemsData = await getItemById(id)
            if (!this.itemsData || this.itemsData.length == 0)
                this.$router.push({ name: 'error'});
            this.activePage = id;
            if (id == 1)
                this.navigateClass = "navigate-right";
            else if (id == 1204)
                this.navigateClass = "navigate-left";
            else
                this.navigateClass = "navigate";
        },
        navigate(event) {
            var button = (event.target.firstChild.data == "Next" ? 1 : -1);
            var newId = parseInt(button) + parseInt(this.activePage);
            while (missingItem.includes(newId)) {
                newId += parseInt(button);
            }
            this.$router.push({ name: 'itemPage', params: { id: newId}});
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
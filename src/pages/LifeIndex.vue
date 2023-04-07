<template>
    <HeaderCard
        :class="active"
    />
    <div class="everything">
        <div class="path">
            <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'lifeIndex'}">Life</router-link>
        </div>
        <div class="container">
            <router-link :to="{ name: 'ailmentsGallery'}" class="item">
                <img alt="Ailment-picture" src="@/assets/ailment.jpg"/>
                <h2>Ailment</h2>
            </router-link>
            <router-link :to="{ name: 'monstersGallery'}" class="item">
                <img alt="Monster-picture" src="@/assets/monster.jpg"/>
                <h2>Monster</h2>
            </router-link>
            <router-link :to="{ name: 'locationsGallery'}" class="item">
                <img alt="Location-picture" src="@/assets/location.jpg"/>
                <h2>Location</h2>
            </router-link>
        </div>
    </div>
    <FooterCard/>
</template>
    
<script>
    import HeaderCard from '@/components/Header.vue'
    import FooterCard from '@/components/Footer.vue'
    
    export default {
      name: 'LifeIndex',
      components: {
          HeaderCard,
          FooterCard,
      },
      data() {
        return {
            active: "life"
        }
      },
      beforeMount() {
      },
      methods: {
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
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2vh;
        margin-bottom: 1vh;
    }

    .item img {
        height: auto;
        width: 15vw;
    }

    .item h2 {
        text-align: center;
        margin-top: 0.2em;
        margin-bottom: 0.4em;
    }

    .path {
        margin-left: 2vw;
    }

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 970px) {
        .item img {
            width: 30vw;
        }
    }

    @media screen and (max-width: 650px) {
        .item img {
            width: 40vw;
        }
    }
</style>
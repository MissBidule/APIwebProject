<template>
    <HeaderCard
        :class="active"
    />
    <div class="everything">
        <div class="path">
            <router-link :to="{ name: 'home'}">Home</router-link> >> <router-link :to="{ name: 'objectIndex'}">Object</router-link>
        </div>
        <div class="container">
            <router-link :to="{ name: 'armorsGallery'}" class="item">
                <img alt="Armor-pieces-picture" rel="preload" src="@/assets/armorpiece.jpg"/>
                <h2>Armor pieces</h2>
            </router-link>
            <router-link :to="{ name: 'setsGallery'}" class="item">
                <img alt="Armor-set-picture" rel="preload" src="@/assets/armorset.jpg"/>
                <h2>Armor set</h2>
            </router-link>
            <router-link :to="{ name: 'charmsGallery'}" class="item">
                <img alt="Charm-picture" rel="preload" src="@/assets/charm.jpg"/>
                <h2>Charms</h2>
            </router-link>
            <router-link :to="{ name: 'decorationsGallery'}" class="item">
                <img alt="Decoration-picture" rel="preload" src="@/assets/decoration.jpg"/>
                <h2>Decorations</h2>
            </router-link>
            <router-link :to="{ name: 'itemsGallery'}" class="item">
                <img alt="Item-picture" rel="preload" src="@/assets/item.jpg"/>
                <h2>Items</h2>
            </router-link>
            <router-link :to="{ name: 'skillsGallery'}" class="item">
                <img alt="Skill-picture" rel="preload" src="@/assets/skills.jpg"/>
                <h2>Skills</h2>
            </router-link>
            <router-link :to="{ name: 'weaponsGallery'}" class="item">
                <img alt="Weapon-picture" rel="preload" src="@/assets/weapon.jpg"/>
                <h2>Weapons</h2>
            </router-link>
        </div>
    </div>
    <FooterCard/>
</template>
    
<script>
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    
    export default {
      name: 'ObjectIndex',
      components: {
          HeaderCard,
          FooterCard,
      },
      data() {
        return {
            active: "object"
        }
      },
      beforeMount() {
      },
      methods: {
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
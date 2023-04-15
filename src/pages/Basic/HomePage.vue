<template>
    <HeaderCard
        :class="active"
    />
    <div class="Main-article">
        <h1>Welcome to the MONSTER HUNTER WORLD guide</h1>

        <img class="barre" rel="preload" src="@/assets/barre.png"/>

        <div class ="trailer">
            <iframe src="https://www.youtube.com/embed/OotQrKEqe94" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>

        <div class="container">

          <div class="left">
            <h2>What you can find here :</h2>
            <ul class="listOf">
              <li><router-link :to="{ name: 'monstersGallery'}">List of Monsters</router-link></li>
              <li><router-link :to="{ name: 'weaponsGallery'}">List of Weapons</router-link></li>
              <li><router-link :to="{ name: 'setsGallery'}">List of Armor sets</router-link></li>
              <li><router-link :to="{ name: 'itemsGallery'}">List of items</router-link></li>
              <li><router-link :to="{ name: 'locationsGallery'}">List of locations</router-link></li>
            </ul>

            ... and many more !
          </div>

          <div class="hl"></div>
          
          <OfTheDayCard
          :Mname="monsterOfTheDay[0]?.name"
          :Mid="monsterOfTheDay[0]?.id"
          :Wname="weaponOfTheDay[0]?.name"
          :Wid="weaponOfTheDay[0]?.id"
          :Aname="armorOfTheDay[0]?.name"
          :Aid="armorOfTheDay[0]?.id"
          :Iname="itemOfTheDay[0]?.name"
          :Iid="itemOfTheDay[0]?.id"
          :Lname="locationOfTheDay[0]?.name"
          :Lid="locationOfTheDay[0]?.id"
          />

        </div>

    </div>
    <FooterCard/>
</template>
    
<script>
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    import OfTheDayCard from '@/components/BasicSample/OfTheDayCard.vue'
  
    import { getRandMonster, getRandLocation, getRandWeapon, getRandArmorSet, getRandItem } from '@/services/api/GetElementById.js'
    
    export default {
      name: 'MainPage',
      components: {
          HeaderCard,
          FooterCard,
          OfTheDayCard
      },
      data() {
        return {
            active: "home",
            armorOfTheDay: [],
            weaponOfTheDay: [],
            monsterOfTheDay: [],
            itemOfTheDay: [],
            locationOfTheDay: []
        }
      },
      beforeMount() {
        this.retrieveOfTheDayData()
      },
      methods: {
        async retrieveOfTheDayData() {
          this.monsterOfTheDay = await getRandMonster();
          this.weaponOfTheDay = await getRandWeapon();
          this.locationOfTheDay = await getRandLocation();
          this.armorOfTheDay = await getRandArmorSet();
          this.itemOfTheDay = await getRandItem();
        }
      }
    }
</script>

<style>
    .home #home {
        background-color: #896954;
    }
    
    .home #home a {
        background-color: #ddc89e;
    }

    .home #home a:hover {
        background-color: #f5e5be;
    }
</style>

<style scoped>
    h1 {
      margin-top: 1vh;
      margin-bottom: 1vh;
      text-align: center;
      text-shadow: 2px 0 #f5e5be, -2px 0 #f5e5be, 0 2px #f5e5be, 0 -2px #f5e5be,
            1px 1px #f5e5be, -1px -1px #f5e5be, 1px -1px #f5e5be, -1px 1px #f5e5be;
    }

    .Main-article {
      margin-bottom: 1vh;
    }

    .trailer {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    iframe {
        display: block;
        margin: auto;
        height: 1010px;
        max-height: 40vh;
        width: 40vw;
        max-width: 1706px;
        margin-bottom: 20px;
        margin-top: 20px;
        border: 5px solid #694B44;
    }

    .barre {
        display: inline;
        width: 50vw;
        margin: auto;
    }

    img[class~="barre"] {
      display: block;
      margin: auto;
      height: auto;
      max-width: 100%;
    }

    .container .left, .container .right {
      width: 25vw;
    }

    .listOf li {
      float: none;
      background-image: url('@/assets/rond.png');
      background-position: 0 50%;
      background-repeat: no-repeat;
      background-size: 1em;
      padding-left: 1.1em;
      padding-top: 2%;
      padding-bottom: 2%;
      margin-left: 10%;
      text-align: left;
      margin-bottom: 10%;
    }

    .listOf a:hover {
      background-color: rgba(0, 0, 0, 0);
    }

    h2 {
      margin-top: 5%;
      margin-bottom: 5%;
      margin-right: 10%;
    }

    .hl {
      margin:30px;
      min-width:2px;
    }

    .container {
      margin-top: 2vh;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      width: 100%;
      justify-content: center;
    }
    
    .left {
      text-align: right;
    }

    @media screen and (max-width: 970px) {
      iframe {
        width: 60vw;
      }

      .barre {
        width: 70vw;
      }

      .listOf {
        padding-left: 0;
      }
    }
    
</style>
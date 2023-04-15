<template>
    <div class="weapon-item">
        <h1>
            <img class="icon" alt="monster-icon" rel="preload" v-bind:src=icon />
                {{name}}
            <img class="icon" alt="monster-icon" rel="preload" v-bind:src=icon />
        </h1>
        <h2 class="subtitle">{{type}}</h2>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="top-container">
                <div class="information">
                    <div class="row">
                        <h2>Rarity </h2>
                        <p>
                            <img v-for="(n) in rarity" :key="n" class="star" src="@/assets/star.png"/>
                        </p>
                    </div>
                    <div class="row">
                        <h2>Attack : {{atk}}</h2>
                    </div>
                </div>
                <div class="aside">
                    <!-- delete this if no pic -->
                    <img alt="weapon-picture" rel="preload" v-bind:src=img />
                </div>
            </div>
            <div class="bottom-container">
                <h2>Element Damage</h2>
                <div class="table-container">
                    <table>
                        <tr v-for="(n,index) in elements.length" :key="n">
                            <td>
                                <img  class="element" :src="ElementIconList[ElementList.findIndex((item) => item == elements[index].type)]" />
                            </td>
                            <td>
                                {{elements[index].damage}}
                            </td>
                        </tr>
                        <tr v-if="elements.length == 0">
                            no element damage
                        </tr>
                    </table>
                </div>
                <h2>Crafting information</h2>
                <div class="table-container">
                    <table v-if="crafting != null && crafting.craftable">
                            <tr class="titles">
                                <td>Item</td>
                                <td>Quantity</td>
                            </tr>
                            <tr  v-for="(n,index) in crafting.craftingMaterials.length" :key="n">
                                <td>
                                    <router-link :to="{ name: 'itemPage', params: {id: crafting.craftingMaterials[index].item.id}}">
                                        {{crafting.craftingMaterials[index].item.name}}
                                    </router-link>
                                </td>
                                <td>
                                    {{crafting.craftingMaterials[index].quantity}}
                                </td>
                            </tr>
                    </table>
                    <p v-else>
                        not craftable
                    </p>
                </div>
                <h2>Weapon Evolution</h2>
                <div class="table-container">
                    <table v-if="crafting != null && crafting.previous != null">
                            <tr class="titles">
                                <td class="important" colspan="2">Previous weapon : 
                                    <router-link :to="{ name: 'weaponPage', params: {id: crafting.previous}}"> 
                                        {{crafting.previousName}}
                                    </router-link></td>
                            </tr>
                            <tr>
                                <td>Upgrade item</td>
                                <td>Quantity</td>
                            </tr>
                            <tr  v-for="(n,index) in crafting.upgradeMaterials.length" :key="n">
                                <td>
                                    <router-link :to="{ name: 'itemPage', params: {id: crafting.upgradeMaterials[index].item.id}}">
                                        {{crafting.upgradeMaterials[index].item.name}}
                                    </router-link>
                                </td>
                                <td>
                                    {{crafting.upgradeMaterials[index].quantity}}
                                </td>
                            </tr>
                    </table>
                    <p v-else>
                        no previous weapon
                    </p>
                </div>
                <div class="table-container">
                    <table v-if="crafting != null && crafting.branches.length != 0">
                            <tr class="titles">
                                <td>Weapon upgrades</td>
                            </tr>
                            <tr v-for="(n,index) in crafting.branches.length" :key="n">
                                <td>
                                    <router-link :to="{ name: 'weaponPage', params: {id: crafting.branches[index]}}"> 
                                        {{crafting.branchesName[index]}}
                                    </router-link>
                                </td>
                            </tr>
                    </table>
                    <p v-else>
                        no weapon upgrade
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    import {elementName, elementIcon} from '@/services/tools.js'

    import imageTemp from '@/assets/404.png'

    export default {
        name: 'WeaponSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            type: {type: String,  required: true,default:"type not found"},
            rarity: {type: Number,  required: true, default:0},
            atk: {type: Number,  required: true, default:0},
            description: {type: String,  required: true,default:"no description"},
            // delete this if no pic
            img: {type: String,  required: true,default:imageTemp},
            icon: {type: String,  required: true,default:"https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"},
            crafting: {type: Object,  required: true,
                default() {
                    return null;
                }
            },
            elements: {type: Array,  required: true,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                ElementList : elementName,
                ElementIconList : elementIcon
            }
        }
    }
</script>
    
<style scoped>
    /* temp */
    /* table, th, td {
        border: 1px solid;
    } */

    .row {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    .hl {
        width: 2px;
        align-self: stretch;
    }

    .titles td {
        font-size: 1.2em;
    }

    table, p {
        width: 100%;
        text-align: center;
        margin-bottom: 1em;
    }

    .important {
        padding-bottom: 1em;
    }

    h1 {
        margin-bottom: 0;
    }

    h2:not(.subtitle) {
        background-image: url('@/assets/point.png');
        background-position: 0px 50%;
        background-size: 1.2em;
        padding-left: 1.1em;
        background-repeat: no-repeat;
        padding-top: 3%;
        padding-bottom: 3%;
        margin: 0;
    }

    .weapon-item {
        text-decoration: none;
        text-align: center;
    }

    .weapon-item p {
        margin: 0;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        padding: 2vw;
    }

    .top-container {
        display: flex;
        flex-direction: row;
    }
    .bottom-container {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .subtitle {
        margin: 0;
    }

    .table-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .information {
        flex-grow: 3;
        text-align: left;
    }

    .aside {
        flex-grow: 1;
    }

    img.icon {
        width: 0.8em;
    }

    img.element {
        width: 1.5em;
    }

    .aside img {
        max-height: 10em;
        max-width: 15em;
    }

    .barre {
        
        margin: auto;
    }

    img[class~="barre"] {
      display: block;
      width: 40vw;
      margin: auto;
      height: auto;
      max-width: 100%;
    }

    tr a {
        text-decoration: underline;
    }

    @media screen and (max-width: 650px) {
        .top-container {
            flex-direction: column;
        }

        .aside {
            flex-grow: 0;
            order: -1;
        }

        .aside img {
            height: 10em;
            width: auto;
        }

        .information {
            flex-grow: 0;
        }

        .table-container {
            flex-direction: column;
        }
    }
</style>
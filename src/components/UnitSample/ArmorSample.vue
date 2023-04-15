<template>
    <div class="armor-item">
        <h1>{{name}}</h1>
        <h2 class="subtitle">{{type}}</h2>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="top-container">
                <div class="information">
                    <div class="row">
                        <h2>Rank {{rank}}</h2>
                    </div>
                    <div class="row">
                        <h2>Rarity </h2>
                        <p>
                            <img v-for="(n) in rarity" :key="n" class="star" src="@/assets/star.png"/>
                        </p>
                    </div>
                </div>
                <div class="aside">
                    <!-- delete this if no pic -->
                    <img alt="armor-picture" rel="preload" v-bind:src=img1 />
                    <img alt="armor-picture" rel="preload" v-bind:src=img2 />
                </div>
            </div>
            <div class="bottom-container">
                <h2>Defense</h2>
                <div class="table-container">
                    <table>
                            <tr class="titles">
                                <td>Base</td>
                                <td>Max</td>
                                <td>Augmented</td>
                            </tr>
                            <tr v-if="defense.base">
                                <td>
                                    {{defense.base}}
                                </td>
                                <td>
                                    {{defense.max}}
                                </td>
                                <td>
                                    {{defense.augmented}}
                                </td>
                            </tr>
                            <tr v-else>
                                <td colspan="3">
                                    no defense information
                                </td>
                            </tr>
                    </table>
                </div>
                <div class="table-container">
                    <table>
                        <tr class="titles-left">
                            <td colspan="2"><h2>Resistances</h2></td>
                        </tr>
                        <tr>
                            <td>
                                <img class="element" :src="ElementIconList[0]" />
                            </td>
                            <td v-if="resistances.fire!=null">
                                {{resistances.fire}}
                            </td>
                            <td v-else>
                                unknown
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="element" :src="ElementIconList[1]" />
                            </td>
                            <td v-if="resistances.water!=null">
                                {{resistances.water}}
                            </td>
                            <td v-else>
                                unknown
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="element" :src="ElementIconList[2]" />
                            </td>
                            <td v-if="resistances.ice!=null">
                                {{resistances.ice}}
                            </td>
                            <td v-else>
                                unknown
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="element" :src="ElementIconList[3]" />
                            </td>
                            <td v-if="resistances.thunder!=null">
                                {{resistances.thunder}}
                            </td>
                            <td v-else>
                                unknown
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img class="element" :src="ElementIconList[4]" />
                            </td>
                            <td v-if="resistances.dragon!=null">
                                {{resistances.dragon}}
                            </td>
                            <td v-else>
                                unknown
                            </td>
                        </tr>
                    </table>
                    <div class="hl"></div>
                    <table>
                        <tr class="titles-left">
                            <td colspan="2"><h2>Skills</h2></td>
                        </tr>
                        <tr class="titles">
                            <td>Level</td>
                            <td>Skill effect</td>
                        </tr>
                        <tr v-for="(n,index) in skills.length" :key="n">
                            <td>
                                {{skills[index].level}}
                            </td>
                            <td>
                                <router-link :to="{ name: 'skillPage', params: {id: skills[index].id}}">
                                    {{skills[index].description}}
                                </router-link>
                            </td>
                        </tr>
                        <tr v-if="skills.length == 0">
                            no skill for this piece
                        </tr>
                    </table>
                </div>
                <h2>Crafting Items</h2>
                <div class="table-container">
                    <table v-if="materials.length != 0">
                            <tr class="titles">
                                <td>Item</td>
                                <td>Quantity</td>
                            </tr>
                            <tr v-for="(n,index) in materials.length" :key="n">
                                <td>
                                    <router-link :to="{ name: 'itemPage', params: {id: materials[index].item.id}}">
                                        {{materials[index].item.name}}
                                    </router-link>
                                </td>
                                <td>
                                    {{materials[index].quantity}}
                                </td>
                            </tr>
                    </table>
                    <p v-else>
                        no crafting information
                    </p>
                </div>
                <h2>Complete armor set</h2>
                <div class="table-container">
                    <table v-if="armorSet.pieces" >
                        <tr v-for="(n,index) in armorSet.pieces.length" :key="n">
                            <td>
                                <router-link :to="{ name: 'armorPage', params: { id: armorSet.pieces[index]}}">{{armorSet.piecesName[index]}}</router-link>
                            </td>
                        </tr>
                    </table>
                    <table v-else>
                        <tr>
                            <td>
                                no other armor pieces
                            </td>
                        </tr>
                    </table>
                    <div class="hl"></div>
                    <table>
                        <tr v-if="armorSet.pieces">
                            <td>
                                <router-link :to="{ name: 'setPage', params: { id: armorSet.id}}">
                                    {{armorSet.name}} armor set<br>
                                    <img alt="armor-set-picture" rel="preload" v-bind:src=imgAS />
                                </router-link>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>
                                no armor set associated
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    import { elementIcon } from '@/services/tools.js'

    import imageTemp from '@/assets/404.png'

    export default {
        name: 'ArmorSample',
        props: {
            name: {type: String,  required: true, default:"name not found"},
            type: {type: String,  required: true, default:"missing type"},
            rank: {type: String,  required: true, default:"no rank"},
            rarity: {type: Number,  required: true, default:0},
            description: {type: String,  required: true, default:"no description"},
            // delete this if no pic
            img1: {type: String,  required: true, default:imageTemp},
            img2: {type: String,  required: true, default:imageTemp},
            imgAS: {type: String,  required: true, default:imageTemp},
            armorSet: {type: Object,  required: true,
                default() {
                    return new Proxy({},{});
                }
            },
            materials: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            skills: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            resistances: {type: Object,  required: true,
                default() {
                    return new Proxy({},{});
                }
            },
            defense: {type: Object,  required: true,
                default() {
                    return new Proxy({},{});
                }
            }
        },
        data() {
            return {
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

    .row span {
        overflow-wrap: break-word;
    }

    .hl {
        width: 2px;
        align-self: stretch;
    }

    .titles td {
        font-size: 1.2em;
    }

    .titles-left td {
        text-align: left;
    }

    table, p {
        width: 100%;
        text-align: center;
    }

    h1 {
        margin-bottom: 0;
    }

    img.element {
        width: 1.5em;
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

    .subtitle {
        margin: 0;
    }

    .armor-item {
        text-decoration: none;
        text-align: center;
    }

    .armor-item p {
        margin: 0;
        margin-left: 2em;
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

    .aside img {
        max-height: 10em;
        max-width: 7em;
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
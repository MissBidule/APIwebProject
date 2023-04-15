<template>
    <div class="monster-item">
        <h1>
            <img class="icon" alt="monster-icon" rel="preload" v-bind:src=icon />
                {{name}}
            <img class="icon" alt="monster-icon" rel="preload" v-bind:src=icon />
        </h1>
        <h2 class="subtitle">{{type}} | {{species}}</h2>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="top-container">
                <div class="information">
                    <h2>Description</h2>
                    <p>{{description}}</p>
                </div>
                <div class="aside">
                    <!-- delete this if no pic -->
                    <img alt="monster-picture" rel="preload" v-bind:src=img />
                </div>
            </div>
            <div class="bottom-container">
                <div class="row">
                    <h2>Elements</h2>
                    <p>
                        <span v-for="(n,index) in elements.length" :key="n">
                            <img  class="element" :src="ElementIconList[ElementList.findIndex((item) => item == elements[index])]" />
                        </span>
                        <span v-if="elements.length == 0">
                            This monster has no element
                        </span>
                    </p>
                </div>
                <h2>Ailments</h2>
                <p>
                    <span v-for="(n,index) in ailments.length" :key="n">
                        <router-link :to="{ name: 'ailmentPage', params: {id: ailments[index].id}}">
                            {{ailments[index].name}}
                        </router-link>{{ ' ' }}
                    </span>
                    <span v-if="ailments.length == 0">
                        This monster provokes no ailment
                    </span>
                </p>
                <div class="table-container">
                    <table>
                        <tr class="titles">
                            <td colspan="2"><h2>Resistances</h2></td>
                        </tr>
                        <tr v-for="(n,index) in resistances.length" :key="n">
                            <td>
                                <img  class="element" :src="ElementIconList[ElementList.findIndex((item) => item == resistances[index].element)]" />
                            </td>
                            <td v-if="resistances[index].condition != null">
                                {{resistances[index].condition}}
                            </td>
                            <td v-else>
                                always
                            </td>
                        </tr>
                        <tr v-if="resistances.length == 0">
                            no resistance
                        </tr>
                    </table>
                    <div class="hl"></div>
                    <table>
                        <tr class="titles">
                            <td colspan="3"><h2>Weaknesses</h2></td>
                        </tr>
                        <tr v-for="(n,index) in weaknesses.length" :key="n">
                            <td>
                                <img  class="element" :src="ElementIconList[ElementList.findIndex((item) => item == weaknesses[index].element)]" />
                            </td>
                            <td>
                                <img v-for="(n) in weaknesses[index].stars" :key="n" class="star" src="@/assets/star.png"/>
                            </td>
                            <td v-if="weaknesses[index].condition != null">
                                {{weaknesses[index].condition}}
                            </td>
                            <td v-else>
                                always
                            </td>
                        </tr>
                        <tr v-if="weaknesses.length == 0">
                            no weakness
                        </tr>
                    </table>
                </div>
                <h2>Locations</h2>
                <p>
                    <span v-for="(n,index) in locations.length" :key="n">
                        <router-link :to="{ name: 'locationPage', params: {id: locations[index].id}}">
                            {{locations[index].name}}
                        </router-link>{{ ' ' }}
                    </span>
                    <span v-if="locations.length == 0">
                        no location information
                    </span>
                </p>
                <h2>Rewards</h2>
                <p>
                    <span v-for="(n,index) in rewards.length" :key="n">
                        <router-link :to="{ name: 'itemPage', params: {id: rewards[index].item.id}}">
                            {{rewards[index].item.name}}
                        </router-link>{{ ' ' }}
                    </span>
                    <span v-if="rewards.length == 0">
                        no reward information
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
    
<script>   
    import image from '@/assets/404.png'
    import {elementName, elementIcon} from '@/services/tools.js'

    export default {
        name: 'MonsterSample',
        props: {
            name: {type: String,  required: true, default:"name not found"},
            description: {type: String,  required: true, default:"no description"},
            type: {type: String,  required: true, default:"type not found"},
            species: {type: String,  required: true, default:"specie not found"},
            // delete this if no pic
            img: {type: String,  required: true, default:image},
            icon: {type: String,  required: true},
            rewards: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            locations: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            weaknesses: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            resistances: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            ailments: {type: Array,  required: true,
                default() {
                    return [];
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
        flex-wrap: wrap;
        align-items: center;
    }

    .hl {
        width: 2px;
        align-self: stretch;
    }

    .titles td {
        text-align: left;
    }

    table {
        width: 100%;
        text-align: center;
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

    .subtitle {
        margin: 0;
    }


    tr a, span a {
        text-decoration: underline;
    }

    .monster-item {
        text-decoration: none;
        text-align: center;
    }

    .monster-item p {
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
        padding-right: 2em;
    }

    .aside {
        flex-grow: 1;
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

    img.icon {
        width: 0.8em;
    }

    img.element {
        width: 1.5em;
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
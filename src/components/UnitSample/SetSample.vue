<template>
    <div class="set-item">
        <h1>{{name}}</h1>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="top-container">
                <div class="information">
                    <div class="row">
                        <h2>Rank {{rank}}</h2>
                    </div>
                    <h2>Bonus</h2>
                    <div class="table-container">
                        <table v-if="bonus != null">
                                <tr class="titles">
                                    <td colspan="3">{{bonus.name}}</td>
                                </tr>
                                <tr>
                                    <td>
                                        Pieces equipped
                                    </td>
                                    <td>
                                        Skill
                                    </td>
                                    <td>
                                        Skill level
                                    </td>
                                </tr>
                                <tr v-for="(n,index) in bonus.ranks.length" :key="n">
                                    <td>
                                        {{bonus.ranks[index].pieces}}
                                    </td>
                                    <td>
                                        <router-link :to="{ name: 'skillPage', params: { id: bonus.ranks[index].skill.skill}}">{{bonus.ranks[index].skill.skillName}}</router-link>
                                    </td>
                                    <td>
                                        {{bonus.ranks[index].skill.level}}
                                    </td>
                                </tr>
                        </table>
                        <p v-else> 
                            This armor set gives no bonus
                        </p>
                    </div>
                </div>
                <div class="aside">
                    <!-- delete this if no pic -->
                    <img alt="set-picture" rel="preload" v-bind:src=img />
                </div>
            </div>
            <div class="bottom-container">
                <h2>Armor Pieces</h2>
                <div class="set-box">
                    <div v-for="(n,index) in pieces.length" :key="n" class="item">
                        <router-link :to="{ name: 'armorPage', params: { id: pieces[index].id}}">
                            {{pieces[index].name}}<br>
                            <span v-if="pieces[index].assets!=null">
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=pieces[index].assets.imageMale />
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=pieces[index].assets.imageFemale />
                            </span>

                            <span v-else-if="pieces[index].type == 'head'">
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgHM />
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgHF />
                            </span>

                            <span v-else-if="pieces[index].type == 'chest'">
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgCM />
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgCF />
                            </span>
                            
                            <span v-else-if="pieces[index].type == 'gloves'">
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgGM />
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgGF />
                            </span>

                            <span v-else-if="pieces[index].type == 'waist'">
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgWM />
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgWF />
                            </span>

                            <span v-else-if="pieces[index].type == 'legs'">
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgLM />
                                <img alt="armor-piece-picture" rel="preload" v-bind:src=imgLF />
                            </span>
                        </router-link>
                    </div>
                    <div class="none" v-if="pieces.length == 0">no piece found in this set</div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    import image from '@/assets/placeholder_armorset.png'
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
        name: 'SetSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            rank: {type: String,  required: true,default:"no rank"},
            description: {type: String,  required: true,default:"no description"},
            // delete this if no pic
            img: {type: String,  required: true,default:image},
            bonus: {type: Object,  required: true,
                default() {
                    return null;
                }
            },
            pieces: {type: Array,  required: true,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                imgHM: imageMhead,
                imgHF: imageFhead,
                imgCM: imageMchest,
                imgCF: imageFchest,
                imgGM: imageMgloves,
                imgGF: imageFgloves,
                imgWM: imageMwaist,
                imgWF: imageFwaist,
                imgLM: imageMlegs,
                imgLF: imageFlegs
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
        padding-bottom: 1em;
    }

    table, .set-box div.none {
        width: 100%;
        text-align: center;
    }

    h1 {
        margin-bottom: 0;
    }

    h2 {
        background-image: url('@/assets/point.png');
        background-position: 0px 50%;
        background-size: 1.2em;
        padding-left: 1.1em;
        background-repeat: no-repeat;
        padding-top: 3%;
        padding-bottom: 3%;
        margin: 0;
    }

    .set-item {
        text-decoration: none;
        text-align: center;
    }

    .set-item p {
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

    .set-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .set-box div {
        text-align: center;
    }

    .information {
        flex-grow: 3;
        text-align: left;
    }

    .aside {
        flex-grow: 1;
        align-self: center;
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
<template>
    <div class="ailment-item">
        <h1>{{name}}</h1>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="top-container">
                <div class="information">
                    <h2>Description</h2>
                    <p>{{description}}</p>
                </div>
                <div class="aside">
                    <!-- delete this if no pic -->
                    <!-- <img alt="ailment-picture" rel="preload" v-bind:src=img /> -->
                </div>
            </div>
            <div class="bottom-container">
                <h2>Recovery</h2>
                <div class="table-container">
                    <table>
                            <tr class="titles">
                                <td>Actions</td>
                            </tr>
                            <tr v-for="(n,index) in recoveryActions.length" :key="n">
                                <td>
                                    {{recoveryActions[index]}}
                                </td>
                            </tr>
                            <tr>
                                <td v-if="recoveryActions.length == 0">
                                    no recovery action
                                </td>
                            </tr>
                    </table>
                    <div class="hl"></div>
                    <table>
                        <tr class="titles">
                            <td>Items</td>
                        </tr>
                        <tr v-for="(n,index) in recoveryItems.length" :key="n">
                            <td>
                                <router-link :to="{ name: 'itemPage', params: { id: recoveryItems[index].id}}">{{recoveryItems[index].name}}</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="recoveryItems.length == 0">
                                no recovery item
                            </td>
                        </tr>
                    </table>
                </div>
                <h2>Protection</h2>
                <div class="table-container">
                    <table>
                            <tr class="titles">
                                <td>Skills</td>
                            </tr>
                            <tr v-for="(n,index) in protectionSkills.length" :key="n">
                                <td>
                                    <router-link :to="{ name: 'skillPage', params: { id: protectionSkills[index].id}}">{{protectionSkills[index].name}}</router-link>
                                </td>
                            </tr>
                            <tr>
                                <td v-if="protectionSkills.length == 0">
                                    no protection skill
                                </td>
                            </tr>
                    </table>
                    <div class="hl"></div>
                    <table>
                        <tr class="titles">
                            <td>Items</td>
                        </tr>
                        <tr v-for="(n,index) in protectionItems.length" :key="n">
                            <td>
                                <router-link :to="{ name: 'skillPage', params: { id: protectionItems[index].id}}">{{protectionItems[index].name}}</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="protectionItems.length == 0">
                                no protection item
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    // import imageTemp from '@/assets/404.png'

    export default {
        name: 'AilmentSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            description: {type: String,  required: true,default:"no description"},
            // delete this if no pic
            // img: {type: String,  required: true,default:imageTemp},
            recoveryActions: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            recoveryItems: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            protectionSkills: {type: Array,  required: true,
                default() {
                    return [];
                }
            },
            protectionItems: {type: Array,  required: true,
                default() {
                    return [];
                }
            }
        }
    }
</script>
    
<style scoped>
    /* temp */
    /* table, th, td {
        border: 1px solid;
    } */

    .hl {
        width: 2px;
        align-self: stretch;
    }

    .titles td {
        font-size: 1.2em;
    }

    table {
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
        padding-left: 1em;
        background-repeat: no-repeat;
        padding-top: 3%;
        padding-bottom: 3%;
        margin: 0;
    }

    .ailment-item {
        text-align: center;
    }

    .ailment-item p {
        margin: 0;
        margin-left: 2em;
    }

    .main-container {
        /* background-color: #c81c1c; */
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
        /* background-color: hsl(321, 85%, 60%); */
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .information {
        /* background-color: #16c72d; */
        flex-grow: 3;
        text-align: left;
    }

    .aside {
        /* background-color: #077ead; */
        flex-grow: 1;
    }

    .aside img {
        width: 15em;
        max-height: 10em;
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

    td a {
        text-decoration: underline;
    }

    @media screen and (max-width: 650px) {
        .top-container {
            flex-direction: column;
        }
        .aside {
            flex-grow: 0;
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
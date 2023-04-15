<template>
    <div class="charm-item">
        <h1>{{name}}</h1>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="bottom-container">
                <h2>Charm rank</h2>
                <div class="table-container">
                    <table v-if="ranks.length!= 0">
                            <tr class="titles">
                                <td>Level</td>
                                <td>Rarity</td>
                                <td>Skill effect</td>
                            </tr>
                            <tr v-for="(n, index) in ranks" :key="n">
                                <td>
                                    {{ranks[index].level}}
                                </td>
                                <td>
                                    <img v-for="(m) in ranks[index].rarity" :key="m" class="star" src="@/assets/star.png"/>
                                </td>
                                <td  v-for="(m,index2) in ranks[index].skills.length" :key="m">
                                    <router-link :to="{ name: 'skillPage', params: {id: ranks[index].skills[index2].skill}}">
                                        {{ranks[index].skills[index2].description}}
                                    </router-link>{{ }}
                                </td>
                            </tr>
                    </table>
                    <p v-if="ranks.length == 0">
                        no rank information
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    export default {
        name: 'CharmSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            description: {type: String,  required: true,default:"no description"},
            ranks: {type: Array,  required: true,
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
        padding-left: 1.1em;
        background-repeat: no-repeat;
        padding-top: 3%;
        padding-bottom: 3%;
        margin: 0;
    }

    .charm-item {
        text-decoration: none;
        text-align: center;
    }

    .charm-item p {
        margin: 0;
        text-align: center;
        width: 100%;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        padding: 2vw;
        padding-top: 0vw;
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

    .table-container div {
        text-align: center;
    }

    @media screen and (max-width: 650px) {

        .information {
            flex-grow: 0;
        }

        .table-container {
            flex-direction: column;
        }
    }
</style>
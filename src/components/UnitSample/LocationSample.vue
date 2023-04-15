<template>
    <div class="location-item">
        <h1>{{name}}</h1>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="top-container">
                <div class="information">
                    <div class="row">
                        <h2>Zone Count : {{zoneCount}}</h2>
                    </div>
                    <h2>Camp List</h2>
                    <div class="table-container">
                        <table>
                                <tr class="titles">
                                    <td>Nom</td>
                                    <td>Zone</td>
                                </tr>
                                <tr v-for="(n,index) in camps.length" :key="n">
                                    <td>
                                        {{camps[index].name}}
                                    </td>
                                    <td>
                                        {{camps[index].zone}}
                                    </td>
                                </tr>
                                <tr v-if="camps.length == 0">
                                    <td colspan="2">
                                        no camp information
                                    </td>
                                </tr>
                        </table>
                    </div>
                </div>
                <div class="aside">
                    <!-- delete this if no pic -->
                    <img alt="location-picture" rel="preload" v-bind:src=img />
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    import image from '@/assets/404.png'

    export default {
        name: 'LocationSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            zoneCount: {type: String,  required: true,default:"missing information"},
            // delete this if no pic
            img: {type: String,  required: true, default:image},
            camps: {type: Array,  required: true,
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

    .location-item, .location-item a {
        text-decoration: none;
        text-align: center;
    }

    .location-item p {
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
        align-self: center;
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
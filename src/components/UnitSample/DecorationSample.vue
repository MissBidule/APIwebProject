<template>
    <div class="decoration-item">
        <h1>{{name}}</h1>
        <img class="barre rotate180" rel="preload" src="@/assets/barre.png"/>
        <div class="main-container">
            <div class="bottom-container">
                <div class="row">
                    <h2>Rarity </h2>
                    <p>
                        <img v-for="(n) in rarity" :key="n" class="star" src="@/assets/star.png"/>
                    </p>
                </div>
                <h2>Skill effect</h2>
                <p>
                    <span v-for="(n,index) in skills" :key="n">
                        <router-link :to="{ name: 'skillPage', params: {id: skills[index].skill}}">
                            {{skills[index].description}}
                        </router-link>{{ }}
                    </span>
                    <span v-if="skills.length == 0">
                        no skill effect
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>
    
<script>   
    export default {
        name: 'DecorationSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            description: {type: String,  required: true,default:"no description"},
            rarity: {type: Number,  required: true, default:0},
            skills: {type: Array,  required: true,
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

    .decoration-item {
        text-decoration: none;
        text-align: center;
    }

    .decoration-item p {
        margin: 0;
        margin-left: 2em;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        padding: 2vw;
        padding-top: 0;
    }

    .bottom-container {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .information {
        flex-grow: 3;
        text-align: left;
    }

    .main-container p {
        text-align: center;
        width: 100%;
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
        .information {
            flex-grow: 0;
        }
    }
</style>
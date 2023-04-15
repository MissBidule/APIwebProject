<template>
    <div class="item-item">
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
                <h2>Description </h2>
                <p>
                    {{description}}
                </p>
                <div class="row">
                    <h2>Carry limit : {{carryLimit}}</h2>
                </div>
                <div class="row">
                    <h2>Value (zenny) : {{value}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>   
    export default {
        name: 'ItemSample',
        props: {
            name: {type: String,  required: true,default:"name not found"},
            rarity: {type: Number,  required: true, default:0},
            carryLimit: {type: Number,  required: true, default:0},
            value: {type: Number,  required: true, default:0},
            description: {type: String,  required: true,default:"no description"}
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

    .main-container p {
        text-align: center;
        width: 100%;
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

    .item-item, .item-item a {
        text-decoration: none;
        text-align: center;
    }

    .item-item p {
        margin: 0;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        padding: 2vw;
        padding-top: 0;
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

        .table-container {
            flex-direction: column;
        }
    }
</style>
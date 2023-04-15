<template>
    <div class="right">
        <div class="draw">
            <h3>Monster of the day :</h3>
            <p><router-link :to="{ name: 'monsterPage', params: { id: Mid }}">{{Mname}}</router-link></p>
        </div>
        <div class="draw">
            <h3>Weapon of the day :</h3>
            <p><router-link :to="{ name: 'weaponPage', params: { id: Wid }}">{{Wname}}</router-link></p>
        </div>
        <div class="draw">
            <h3>Armor set of the day :</h3>
            <p><router-link :to="{ name: 'setPage', params: { id: Aid }}">{{Aname}}</router-link></p>
        </div>
        <div class="draw">
            <h3>Item of the day :</h3>
            <p><router-link :to="{ name: 'itemPage', params: { id: Iid }}">{{Iname}}</router-link></p>
        </div>
        <div class="draw">
            <h3>Location of the day :</h3>
            <p><router-link :to="{ name: 'locationPage', params: { id: Lid }}">{{Lname}}</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OfTheDayCard',
        props: {
            Mname: {type: String,  required: true, default:"Monster loading"},
            Mid:   {type: Number,  required: true, default:0},
            Wname: {type: String,  required: true, default:"Weapon loading"},
            Wid:   {type: Number,  required: true, default:0},
            Aname: {type: String,  required: true, default:"Armor loading"},
            Aid:   {type: Number,  required: true, default:0},
            Iname: {type: String,  required: true, default:"Item loading"},
            Iid:   {type: Number,  required: true, default:0},
            Lname: {type: String,  required: true, default:"Location loading"},
            Lid:   {type: Number,  required: true, default:0}
        }
    }
</script>
  
<style scoped>
    h3 {
      background-image: url('@/assets/point.png');
      background-position: 0px 50%;
      width: 100%;
      background-size: 1em;
      padding-left: 1.1em;
      background-repeat: no-repeat;
      padding-top: 3%;
      padding-bottom: 3%;
      margin: 0;
      font-size: 1em;
    }

    .draw {
        margin-top: 1.5%;
    }

    .right {
      margin-top: 5%;
    }

    .right p {
      margin: 0;
      text-align: center;
    }

    .right p a {
        color: #694B44;
    }
</style>
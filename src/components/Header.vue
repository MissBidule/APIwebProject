<template>
    <div>
        <ul class="topnav">
            <li id="home"><router-link :to="{ name: 'home'}">Home</router-link></li>
            <li class="dropdown" id="object">
                <router-link :to="{ name: 'objectIndex'}" class="dropbtn">Object</router-link>
                <div class="dropdown-content">
                    <router-link :to="{ name: 'armorsGallery'}">Armor pieces</router-link>
                    <router-link :to="{ name: 'setsGallery'}">Armor set</router-link>
                    <router-link :to="{ name: 'charmsGallery'}">Charms</router-link>
                    <router-link :to="{ name: 'decorationsGallery'}">Decorations</router-link>
                    <router-link :to="{ name: 'itemsGallery'}">Items</router-link>
                    <router-link :to="{ name: 'skillsGallery'}">Skills</router-link>
                    <router-link :to="{ name: 'weaponsGallery'}">Weapons</router-link>
                </div>
            </li>
            <li class="dropdown" id="life">
                <router-link :to="{ name: 'lifeIndex'}" class="dropbtn">Life</router-link>
                <div class="dropdown-content">
                    <router-link :to="{ name: 'ailmentsGallery'}">Ailment</router-link>
                    <router-link :to="{ name: 'monstersGallery'}">Monster</router-link>
                    <router-link :to="{ name: 'locationsGallery'}">Location</router-link>
                </div>
            </li>
            <input type="text" @keyup.enter="submit" placeholder="Search...">
        </ul>        
    </div>
</template>
  
<script>
export default {
    name: 'HeaderCard',
    methods: {
        submit(event) {
            this.$router.push({ name: 'searchPage', params: { name: event.target.value}});
        }
    }
}
</script>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');

    .rotate180 {
        transform: rotate(180deg);
    }

    html {
        font-family: 'Neucha', cursive;
        font-size: 1.5em;
        color: #694B44;
        width: 100vw;
        height: 100%;
        min-height: 100vh;
        background-image: url(@/assets/bgimg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-attachment: fixed;
    }

    select {
        font-family: 'Neucha', cursive;
    }

    body {
        margin: auto;
        width: 70%;
        min-height: 100vh;
        background-color: #f5e5be;
        background-image: url(@/assets/logo.png);
        background-position: 50% 25%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 70%;
    }

    #app > div {
        min-height: 100vh;
        position: relative;
        padding-bottom: 2.5em;
        box-sizing: border-box;
    }

    ul {
        list-style-type: none;
        margin: 0;
    }

    ul.topnav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        padding-bottom: 10px;
        overflow: hidden;
    }

    ul.topnav li {
        float: left;
        width: 22%;
        min-width: 160px;
        background-color: #ddc89e;
        border-right: #694B44 5px double;
        border-bottom: #694B44 5px double;
        border-radius: 5px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 0px;
        box-shadow: 1px 2px 12px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    ul.topnav li a {
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    input, a {
        color: #694B44;
    }

    .topnav input[type=text] {
        float: right;
        padding: 6px;
        background-image: url('@/assets/rond.png');
        background-position: 0px 50%;
        background-size: 3.5vh;
        background-repeat: no-repeat;
        padding-left: 4.5vh;  
        background-color: #f5e5be;/*ddc89e;*/
        border: #694B44 5px double;
        font-size: 1em;
        height: 3vh;
        font-family: 'Neucha', cursive;
        width: 10vw;
    }

    .topnav input[type=text]:focus {
        color: #694B44;
        background-color: #ddc89e;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #694B44;
        opacity: 1; /* Firefox */
        font-family: 'Neucha', cursive;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #655653;
        font-family: 'Neucha', cursive;
    }

    li.dropdown a, .dropbtn {
        display: inline-block;
        color: #694B44;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    #home a:hover {
        background-color: #f5e5be;
    }

    li.dropdown a:hover, .dropdown:hover .dropbtn {
        background-color: #f5e5be;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ddc89e;
        border-right: #694B44 5px double;
        border-bottom: #694B44 5px double;
        border-radius: 5px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 0px;
        width: 22%;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content a:hover {
        background-color: #f5e5be;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    @media screen and (max-width: 970px) {
        body {
            width: 100vw;
        }

        .dropdown-content{
            width: 22%;
        }

        .topnav input[type=text] {
            font-size: 1em;
            padding-left: 10%;
        }
    }

    @media screen and (max-width: 650px) {
        ul.topnav li.right, 
        ul.topnav li {
            display: block;
            float: none;
            width: 98%;
        }

        .topnav input[type=text] {
            margin-top: 2%;
            float: none;
            width: 25vw;
        }

        ul.topnav li a {
            text-align: left;
        }

        .dropdown-content{
            width: 98%;
        }

        html {
            font-size: 1.1em;
        }

        #app > div {
            padding-bottom: 22vw;
        }
    }
</style>

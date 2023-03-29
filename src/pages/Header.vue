<template>
    <div>
        <ul class="topnav">
            <li><a id="home" href="#home">Home</a></li>
            <li class="dropdown">
                <a id="object" href="#about" class="dropbtn">Object</a>
                <div class="dropdown-content">
                    <a href="#">Armor pieces</a>
                    <a href="#">Armor set</a>
                    <a href="#">Charms</a>
                    <a href="#">Decorations</a>
                    <a href="#">Items</a>
                    <a href="#">Skills</a>
                    <a href="#">Weapons</a>
                </div>
            </li>
            <li class="dropdown">
                <a id="life" href="#about" class="dropbtn">Life</a>
                <div class="dropdown-content">
                    <a href="#">Ailment</a>
                    <a href="#">Monster</a>
                    <a href="#">Location</a>
                </div>
            </li>
            <input type="text" placeholder="Search...">
        </ul>        
    </div>
</template>
  
<script>
export default {
  name: 'HeaderCard'
}
</script>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');

    html {
        font-family: 'Neucha', cursive;
        background-color: #f5e5be;
        width: 100%;
        font-size: 1.2em;
    }

    select {
        font-family: 'Neucha', cursive;
    }

    body {
        margin: 0;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    ul.topnav {
        list-style-type: none;
        margin: 0;
        padding-bottom: 10px;
        overflow: hidden;
    }

    ul.topnav li {
        float: left;
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

    ul.topnav li, a {
        color: #694B44;
    }

    .topnav input[type=text] {
        float: right;
        padding: 6px;
        background-image: url('.././assets/rond.png');
        background-position: 0px -2px;
        background-repeat: no-repeat;
        padding-left: 35px;  
        background-color: #f5e5be;/*ddc89e;*/
        border: #694B44 5px double;
        margin-top: 2px;
        margin-right: 2px;
        font-size: 17px;
        font-family: 'Neucha', cursive;
    }

    .topnav input[type=text]:focus {
        background-color: #ddc89e;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #655653;
        opacity: 1; /* Firefox */
        font-family: 'Neucha', cursive;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #655653;
        font-family: 'Neucha', cursive;
    }

    @media screen and (max-width: 600px) {
        ul.topnav li.right, 
        ul.topnav li {
            display: block;
            float: none;
            width: 99%;
        }

        .topnav input[type=text] {
            float: none;
            width: 90%;
        }

        ul.topnav li a {
            text-align: left;
        }

        .dropdown-content {
            width: 99%;
        }
    }

    li {
        float: left;
    }

    li a, .dropbtn {
        display: inline-block;
        color: #694B44;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover, .dropdown:hover .dropbtn {
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
</style>

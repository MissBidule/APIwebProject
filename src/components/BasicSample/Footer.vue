<template>
    <div class="footer">
        <footer>
            <hr>
            <p><a href="#top">Back to the top</a>
                 - Monster Hunter Guide - IMAC web project 2023 - Lilou ALIDOR</p>
        </footer>
    </div>
</template>
  
<script>
export default {
  name: 'FooterCard'
}
</script>
  
<style>
    .footer {
        bottom: 0px;
        position: absolute;
        width: 100%;
    }

    footer {
        text-align: center;
        color: #694B44;
        position:relative;
        bottom:0px;
        height:2.5em;
        width:100%;
        font-size: 0.7em;
    }

    footer a {
        color: #694B44;
        text-decoration: none;
    }

    hr {
        width: 60vw;
        max-width: 2200px;
        border: 1px solid #694B44;
    }

    @media screen and (max-width: 970px) {
    }

    @media screen and (max-width: 360px) {
        footer {
            text-align: center;
            color: #694B44;
            position:relative;
            bottom:0px;
            height:3.5em;
        }
    }
</style>

<template>
    <HeaderCard
    />
    <div class="Main-article">
        <img class="error" rel="preload" src="@/assets/404.png"/>
        <h1>Error 404</h1>
        <h2>Page not found or missing</h2>
        <h3>Don't worry the API is incomplete</h3>
    </div>
    <FooterCard/>
</template>
    
<script>
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    
    export default {
      name: 'ErrorPage404',
      components: {
          HeaderCard,
          FooterCard
      }
    }
</script>

<style scoped>
    h1, h2, h3 {
      margin-top: 1vh;
      margin-bottom: 1vh;
      text-align: center;
      text-shadow: 2px 0 #f5e5be, -2px 0 #f5e5be, 0 2px #f5e5be, 0 -2px #f5e5be,
            1px 1px #f5e5be, -1px -1px #f5e5be, 1px -1px #f5e5be, -1px 1px #f5e5be;
    }

    .Main-article {
      margin-bottom: 1vh;
    }

    .error {
        display: inline;
        width: 50vw;
        margin: auto;
    }

    img[class~="error"] {
      display: block;
      margin: auto;
      height: auto;
      max-width: 100%;
    }

    @media screen and (max-width: 970px) {
      .error {
        width: 70vw;
      }
    }
    
</style>
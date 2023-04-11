<template>
    <img rel="preload" class="picture" src="@/assets/loading.gif"/>
    <h2>Loading...</h2>
</template>
  
<script>
export default {
    name: 'LoadingCard'
}
</script>
  
<style>
    img.picture {
  position: absolute;
  left: 50%;
  width: 30vw;
  height: auto;
  padding: auto;
  transform: translate(-50%, 0);
}

.wait-for-gallery {
  position: relative;
  width: 100%;
}

.wait-for-gallery h2 {
  position: absolute;
  left: 50%;
  color: #f5e5be;
  text-shadow: 2px 0 #694b44, -2px 0 #694b44, 0 2px #694b44, 0 -2px #694b44,
  1px 1px #694b44, -1px -1px #694b44, 1px -1px #694b44, -1px 1px #694b44;
  transform: translate(-50%, 0);
}
</style>

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//global var
//myApp.config.globalProperties.$myVar = globalVariable 
import App from './App.vue'
import ArmorsGallery from './pages/ArmorsGallery.vue'
import MonstersGallery from './pages/MonsterTest.vue'

const routes = [
    { path: '/monster/:id/', component: MonstersGallery, name:"monsterPage", pathMatch: 'full' },
    { path: '/', component: ArmorsGallery, name:"armorsPage" },
    { path: "/:catchAll(.*)", redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//Trying a manual rand with a seed
function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}

function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

// Create cyrb128 state:
var seed = cyrb128(year+' '+month+' '+day);
// Four 32-bit component hashes provide the seed for sfc32.
var rand = sfc32(seed[0], seed[1], seed[2], seed[3]);

// Obtain sequential random numbers like so:
console.log(rand());

const app = createApp(App)
app.use(router)
app.mount('#app')

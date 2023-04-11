import { createRouter, createWebHistory } from 'vue-router'
import ArmorsGallery from '@/pages/ArmorsGallery.vue'
import CharmsGallery from '@/pages/CharmsGallery.vue'
import DecorationsGallery from '@/pages/DecorationsGallery.vue'
import ItemsGallery from '@/pages/ItemsGallery.vue'
import SkillsGallery from '@/pages/SkillsGallery.vue'
import AilmentsGallery from '@/pages/AilmentsGallery.vue'
import WeaponsGallery from '@/pages/WeaponsGallery.vue'
import ArmorTypeGallery from '@/pages/ArmorTypeGallery.vue'
import WeaponTypeGallery from '@/pages/WeaponTypeGallery.vue'
import MonsterTypeGallery from '@/pages/MonsterTypeGallery.vue'
import SetsGallery from '@/pages/SetsGallery.vue'
import LocationsGallery from '@/pages/LocationsGallery.vue'
import MonstersGallery from '@/pages/MonstersGallery.vue'
import MainPage from '@/pages/HomePage.vue'
import SearchPage from '@/pages/SearchPage.vue'
import LifeIndex from '@/pages/LifeIndex.vue'
import ObjectIndex from '@/pages/ObjectIndex.vue'

const routes = [
    { path: '/life/monsters', component: MonstersGallery, name:"monstersGallery"},
    { path: '/life/monsters/:id', component: MonstersGallery, name:"monsterPage"},
    { path: '/life/monsters/type/:type', component: MonsterTypeGallery, name:"monstersTypeGallery"},
    { path: '/object/sets', component: SetsGallery, name:"setsGallery"},
    { path: '/object/sets/:id', component: MonstersGallery, name:"setPage"},
    { path: '/object/items', component: ItemsGallery, name:"itemsGallery"},
    { path: '/object/items/:id', component: MonstersGallery, name:"itemPage"},
    { path: '/object/weapons', component: WeaponsGallery, name:"weaponsGallery"},
    { path: '/object/weapons/type/:type', component: WeaponTypeGallery, name:"weaponsTypeGallery"},
    { path: '/object/weapons/:id', component: MonstersGallery, name:"weaponPage"},
    { path: '/life/locations', component: LocationsGallery, name:"locationsGallery"},
    { path: '/life/locations/:id', component: MonstersGallery, name:"locationPage"},
    { path: '/object/armors', component: ArmorsGallery, name:"armorsGallery"},
    { path: '/object/armors/:id', component: ArmorsGallery, name:"armorPage"},
    { path: '/object/armors/type/:type', component: ArmorTypeGallery, name:"armorsTypeGallery"},
    { path: '/object/charms', component: CharmsGallery, name:"charmsGallery"},
    { path: '/object/charms/:id', component: ArmorsGallery, name:"charmPage"},
    { path: '/object/decorations', component: DecorationsGallery, name:"decorationsGallery"},
    { path: '/object/decorations/:id', component: ArmorsGallery, name:"decorationPage"},
    { path: '/object/skills', component: SkillsGallery, name:"skillsGallery"},
    { path: '/object/skills/:id', component: ArmorsGallery, name:"skillPage"},
    { path: '/life/ailments', component: AilmentsGallery, name:"ailmentsGallery"},
    { path: '/life/ailments/:id', component: ArmorsGallery, name:"ailmentPage"},
    { path: '/life', component: LifeIndex, name:"lifeIndex"},
    { path: '/object', component: ObjectIndex, name:"objectIndex"},
    { path: '/search', redirect: '/'},
    { path: '/search/:name', component: SearchPage, name:"searchPage"},
    { path: '/', component: MainPage, name:"home" },
    { path: "/:catchAll(.*)", redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router }
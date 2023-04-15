import { createRouter, createWebHistory } from 'vue-router'
import ArmorsGallery from '@/pages/Gallery/ArmorsGallery.vue'
import CharmsGallery from '@/pages/Gallery/CharmsGallery.vue'
import DecorationsGallery from '@/pages/Gallery/DecorationsGallery.vue'
import ItemsGallery from '@/pages/Gallery/ItemsGallery.vue'
import SkillsGallery from '@/pages/Gallery/SkillsGallery.vue'
import AilmentsGallery from '@/pages/Gallery/AilmentsGallery.vue'
import WeaponsGallery from '@/pages/Gallery/WeaponsGallery.vue'
import ArmorTypeGallery from '@/pages/Type/ArmorTypeGallery.vue'
import WeaponTypeGallery from '@/pages/Type/WeaponTypeGallery.vue'
import MonsterTypeGallery from '@/pages/Type/MonsterTypeGallery.vue'
import SetsGallery from '@/pages/Gallery/SetsGallery.vue'
import LocationsGallery from '@/pages/Gallery/LocationsGallery.vue'
import MonstersGallery from '@/pages/Gallery/MonstersGallery.vue'
import MainPage from '@/pages/Basic/HomePage.vue'
import SearchPage from '@/pages/Basic/SearchPage.vue'
import LifeIndex from '@/pages/Index/LifeIndex.vue'
import ObjectIndex from '@/pages/Index/ObjectIndex.vue'
import ErrorPage404 from '@/pages/Basic/Error404.vue'
import AilmentPage from '@/pages/Page/AilmentPage.vue'
import MonsterPage from '@/pages/Page/MonsterPage.vue'
import LocationPage from '@/pages/Page/LocationPage.vue'
import ArmorPage from '@/pages/Page/ArmorPage.vue'
import SetPage from '@/pages/Page/SetPage.vue'
import WeaponPage from '@/pages/Page/WeaponPage.vue'
import CharmPage from '@/pages/Page/CharmPage.vue'
import DecorationPage from '@/pages/Page/DecorationPage.vue'
import SkillPage from '@/pages/Page/SkillPage.vue'
import ItemPage from '@/pages/Page/ItemPage.vue'

const routes = [
    { path: '/life/monsters', component: MonstersGallery, name:"monstersGallery"},
    { path: '/life/monsters/:id', component: MonsterPage, name:"monsterPage"},
    { path: '/life/monsters/type/:type', component: MonsterTypeGallery, name:"monstersTypeGallery"},
    { path: '/object/sets', component: SetsGallery, name:"setsGallery"},
    { path: '/object/sets/:id', component: SetPage, name:"setPage"},
    { path: '/object/items', component: ItemsGallery, name:"itemsGallery"},
    { path: '/object/items/:id', component: ItemPage, name:"itemPage"},
    { path: '/object/weapons', component: WeaponsGallery, name:"weaponsGallery"},
    { path: '/object/weapons/type/:type', component: WeaponTypeGallery, name:"weaponsTypeGallery"},
    { path: '/object/weapons/:id', component: WeaponPage, name:"weaponPage"},
    { path: '/life/locations', component: LocationsGallery, name:"locationsGallery"},
    { path: '/life/locations/:id', component: LocationPage, name:"locationPage"},
    { path: '/object/armors', component: ArmorsGallery, name:"armorsGallery"},
    { path: '/object/armors/:id', component: ArmorPage, name:"armorPage"},
    { path: '/object/armors/type/:type', component: ArmorTypeGallery, name:"armorsTypeGallery"},
    { path: '/object/charms', component: CharmsGallery, name:"charmsGallery"},
    { path: '/object/charms/:id', component: CharmPage, name:"charmPage"},
    { path: '/object/decorations', component: DecorationsGallery, name:"decorationsGallery"},
    { path: '/object/decorations/:id', component: DecorationPage, name:"decorationPage"},
    { path: '/object/skills', component: SkillsGallery, name:"skillsGallery"},
    { path: '/object/skills/:id', component: SkillPage, name:"skillPage"},
    { path: '/life/ailments', component: AilmentsGallery, name:"ailmentsGallery"},
    { path: '/life/ailments/:id', component: AilmentPage, name:"ailmentPage"},
    { path: '/life', component: LifeIndex, name:"lifeIndex"},
    { path: '/object', component: ObjectIndex, name:"objectIndex"},
    { path: '/search', redirect: '/'},
    { path: '/search/:name', component: SearchPage, name:"searchPage"},
    { path: '/404', component: ErrorPage404, name:"error" },
    { path: '/', component: MainPage, name:"home" },
    { path: "/:catchAll(.*)", redirect: '/404' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router }
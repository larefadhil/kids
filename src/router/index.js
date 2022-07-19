import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import AnimalNames from '../components/AnimalNames.vue'
import AnimalSounds from '../components/AnimalSounds.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
        component: HelloWorld
  },
    {
        path: '/AnimalNames',
        name: 'AnimalNames',
        component: AnimalNames
    },
    {
        path: '/AnimalSounds',
        name: 'AnimalSounds',
        component: AnimalSounds
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

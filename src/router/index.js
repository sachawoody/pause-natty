import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import Contact from '@/views/Contact.vue'
import CGV from '@/views/CGV.vue'
import Mentions from '@/views/MentionsLegales.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cgv',
    name: 'CGV',
    component: CGV
  },
  {
    path: '/mentions-légales',
    name: 'Mentions légales',
    component: Mentions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

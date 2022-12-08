import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import Storia from '../components/Storia.vue'
import Personaggi from '../components/Personaggi.vue'
import Progetto from '../components/Progetto.vue'
import Libro from '../components/Libro.vue'
import App from '../components/App.vue'
import Autori from '../components/Autori.vue'
import Target from '../components/Target.vue'
import Login from '../components/Login.vue'
import Error404 from '../components/Error404.vue'
import Canzoni from '../components/Canzoni.vue'
import Concerto from '../components/Concerto.vue'

const meta = {
  enterClass: 'animate__animated animate__fadeIn',
  leaveClass: 'animate__animated animate__fadeOut'
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Login,
      name: 'login',
      meta: meta
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      meta: meta
    },
    {
      path: '/storia',
      component: Storia,
      name: 'storia',
      meta: meta
    },
    {
      path: '/personaggi',
      component: Personaggi,
      name: 'personaggi',
      meta: meta
    },
    {
      path: '/progetto',
      component: Progetto,
      name: 'progetto',
      meta: meta
    },
    {
      path: '/libro',
      component: Libro,
      name: 'libro',
      meta: meta
    },
    {
      path: '/app',
      component: App,
      name: 'app',
      meta: meta
    },
    {
      path: '/autori',
      component: Autori,
      name: 'autori',
      meta: meta
    },
    {
      path: '/target',
      component: Target,
      name: 'target',
      meta: meta
    },
    {
      path: '/canzoni',
      component: Canzoni,
      name: 'canzoni',
      meta: meta
    },
    {
      path: '/concerto',
      component: Concerto,
      name: 'concerto',
      meta: meta
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
      name: '404',
      meta: meta
    },
  ]
});

export default router;
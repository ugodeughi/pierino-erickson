import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import Storia from '../components/Storia.vue'
import Personaggi from '../components/Personaggi.vue'
import Progetto from '../components/Progetto.vue'
import Libro from '../components/Libro.vue'
import App from '../components/App.vue'
import Autori from '../components/Autori.vue'

const meta = {
  enterClass: 'animate__animated animate__fadeIn',
  leaveClass: 'animate__animated animate__fadeOut'
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
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
  ]
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import {store} from '../data/store'

import Home from '../components/Home.vue'
import Storia from '../components/Storia.vue'
import Personaggi from '../components/Personaggi.vue'
import Progetto from '../components/Progetto.vue'
import Libro from '../components/Libro.vue'
import App from '../components/App.vue'
import Autori from '../components/Autori.vue'
import Login from '../components/Login.vue'
import Error404 from '../components/Error404.vue'
import Canzoni from '../components/Canzoni.vue'
import Concerto from '../components/Concerto.vue'
import Musical from '../components/Musical.vue'

const meta = {
  //enterClass: 'animate__animated animate__fadeIn',
  enterClass: 'animate__animated animate__bounceInLeft',
  //leaveClass: 'animate__animated animate__fadeOut'
  leaveClass: 'animate__animated animate__bounceOutRight'
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
      path: '/musical',
      component: Musical,
      name: 'musical',
      meta: meta
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
      name: '404',
      meta: meta
    },
  ],
  
});

router.beforeEach((to, from) => {
  // ...
  console.log(to.fullPath, from.fullPath)

  axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=0e32030216fe4e7590143cb54c48fb06')
  .then( r => {
    console.log(r.data);
    sendPost(r.data);
  }).catch(e => {
    console.log(e);
  })

   function sendPost(ipData = {}){
    const data = new FormData();
    data.append('to',to.fullPath);
    data.append('from',from.fullPath);
    data.append('city',ipData.city);
    data.append('ip',ipData.ip);
    data.append('psw',store.psw);

    axios.post('/server.php', data)
    .then(r => {
      console.log(r.data);
    })
    .catch(e => {
      console.log('ERROR');
    })
   }

  return true
})

export default router;
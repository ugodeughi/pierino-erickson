<template>

<div v-if="store.logged" class="container-nav">

    <router-link :class="{'active' : pagesPrpgetto.includes($route.name)}" :to="{name: 'progetto'}"><button class="btn">il progetto</button></router-link>
    <router-link :to="{name: 'libro'}"><button class="btn">il libro</button></router-link>
    <router-link :class="{'active' : pagesApp.includes($route.name)}" :to="{name: 'app'}"><button class="btn">l'app</button></router-link>
    
</div>

<div v-else class="space"></div>

<div v-if="pagesPrpgetto.includes($route.name) && store.logged" class="submenu">
    <router-link :to="{name: 'home'}">presentazione</router-link>
    <router-link :to="{name: 'progetto'}">il progetto</router-link>
    <router-link :to="{name: 'storia'}">la storia</router-link>
    <router-link :to="{name: 'personaggi'}">i personaggi / strumenti</router-link>
    <router-link :to="{name: 'autori'}">gli autori</router-link>
    <router-link :to="{name: 'target'}">a chi è rivolto</router-link>
</div>

<div v-if="pagesApp.includes($route.name) && store.logged" class="submenu">
  <router-link :to="{name: 'canzoni'}">le canzoni</router-link>
  <router-link :to="{name: 'concerto'}">il concerto</router-link>
</div> 

  
</template>

<script>

import {store} from '../../data/store'
  
export default {
  name: 'Navbar',
  data(){
    return{
      pagesPrpgetto:['progetto','home','storia','personaggi','autori'],
      pagesApp:['app','canzoni', 'concerto'],
      store
    }
  }
}
</script>

<style lang="scss" scoped>

@use '../../style/partials/variables' as *;

.container-nav
{
  display: flex;
  justify-content: center;
  a{
    text-decoration: none;
    transform: rotate(-10deg);
  }
  
}

.submenu{
  text-align: center;
  padding-bottom: 10px;
  a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    font-size: .7rem;
    font-weight: bold;
    color: $primary-color;
    text-transform: uppercase;
    padding: 3px 15px;
    background: rgba(255,255,255,.8);
    border-radius: 10px;
    transition: all .3s;
    &:hover,
    &.router-link-exact-active{
      background: brown;
      color: white;
    }
  }
}

.btn
{
  font-family: $title-font;
  display: block;
  margin: 25px 0;
  //padding: 10px 20px;
  width: 130px;
  height: 30px;
  border: none;
  background-color: $primary-color;
  color: #fff;
  font-size: 16px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: all .3s linear;
  margin-right: 20px;
  box-shadow: 0 0 5px $primary-color;
  text-transform: uppercase;
  &:hover{
    transform: rotateY(15deg);
    box-shadow: -15px 0 15px lighten($primary-color, 20%);
  }
}

.router-link-exact-active .btn,
.active .btn{
  background-color: brown;
  &:hover{
    box-shadow: -15px 0 15px lighten(brown, 30%);
  }
}

.space{
  height: 100px;
}



</style>
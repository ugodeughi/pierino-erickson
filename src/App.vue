<template>

  <Navbar />

   
  <div class="container">
      <router-view v-slot="{ Component, route }" class="page">
        <transition
         :enter-active-class="route.meta.enterClass"
         :leave-active-class="route.meta.leaveClass">
           <component :is="Component" />
        </transition>
      </router-view>
</div>

  

</template>

<script>
import Navbar from './components/partials/Navbar.vue'
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style lang="scss" >

@use './style/general';

.container-btns
{
  perspective: 320px;
}



</style>
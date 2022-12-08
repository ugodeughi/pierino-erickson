<template>
  <div>
    <div class="inner">
      <h1>Il concerto</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259897/tenore_jg4gwy.png" alt="">
      </button>
      Tramite app è possibile accedere al video del concerto con <strong>Claudio Bisio</strong> come voce recitante e orchestra <br> 
      Il video mostrato è da considerarsi una "demo" quindi incompleto e in <strong>bassa risoluzione</strong>.
      </p>

      <h2 class="subtitle">Il Concerto</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670500465/il-concerto_k8bvm5.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670509734/CONCERTO-ottimizzato-cut_y36j92.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 


 


     
    </div>
    </div>
    
    
  </div>
</template>

<script>
import {store} from '../data/store'
export default {
  name: 'Canzoni',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style lang="scss" scoped>
.video-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  video{
    width: 70%;
  }
}
.subtitle{
  padding-top: 30px;
  clear: both;
}
</style>
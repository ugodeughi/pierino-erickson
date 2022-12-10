<template>
  <div>
    <div class="inner">
      <h1>Il concerto</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259896/sezione-fiati_h5ipjk.jpg" alt="">
      </button>
      Tramite app è possibile accedere al video del concerto con orchestra e <strong>Claudio Bisio</strong> come voce recitante <br> 
      Di seguito tre piccoli estratti dell'opara.
      </p>

      <h2 class="subtitle"></h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670694519/direttore_qy5hco.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670695018/intro-_jxpgsi.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Ouverture - intro</strong></div>
      </div> 
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670694519/bisio-falzone_ohkldo.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670695416/prof-_uqtkc7.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>La prof</strong></div>
      </div> 
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670694519/bisio--zampetta_mbyh4r.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670695602/nonna_lilli-_ojdn08.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>La storia di Nonna Lilli</strong></div>
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
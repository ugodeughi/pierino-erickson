<template>
  <div>
    <div class="inner">
      <h1>le canzoni</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259897/tenore_jg4gwy.png" alt="">
      </button>
      Scansionando il QR code presente nel libro cartaceo, oppure direttamente dall'app, è possibile accedere alle canzoni della storia.<br>
      Queste canzoni descrivono momenti e situazioni, e le si può ascoltare cantate con testo scorrevole o in versione karaoke.<br>
      Coerentemente con la trasvorsalità del genere musicale dell'opera anche la canzoni sono molto diverse fra loro in quanto a genere e tipo pi arrangiamento. <br> 
      Di sequito tre esempi:  
      </p>

      <h2 class="subtitle">Il Mondo di Pierino</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499329/pierino-bici_yh3xld.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497304/IL-MONDO-DI-PIERINO_zgusef.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 

      <h2 class="subtitle">Corri Zampetta</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499522/corri-zampetta_oa1ukd.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497263/CORRI-ZAMPETTA_eppnfp.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 

      <h2 class="subtitle">Il Bruco</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499930/bruco-solo-scontornato_oggw9v.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497257/IL-BRUCO_ijynnj.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 

      <h2 class="subtitle">Corri Zampetta - versione karaoke</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499522/corri-zampetta_oa1ukd.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497339/CORRI-ZAMPETTA-KARAOKE_azaqc9.mp4" type="video/mp4">
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
</style>
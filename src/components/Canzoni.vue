<template>
  <div>
    <div class="inner">
      <h1>le canzoni</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259897/tenore_jg4gwy.png" alt="">
      </button>
      Scansionando il QR code presente nel <strong>libro cartaceo</strong> <router-link class="internal-link-light" :to="{name: 'libro'}">[vedi]</router-link>, oppure direttamente dall'<strong>app</strong> <router-link class="internal-link-light" :to="{name: 'app'}">[vedi]</router-link>, è possibile accedere alle canzoni della storia.<br>
      Queste canzoni descrivono momenti e situazioni, e le si possono ascoltare cantate con <strong>testo scorrevole</strong> o in versione <strong>karaoke</strong>.<br><br>
      Coerentemente con la <strong>trasversalità del genere musicale dell'opera</strong> <router-link class="internal-link-light" :to="{name: 'home'}">[vedi il progetto]</router-link>, anche la canzoni sono molto diverse fra loro sia per <strong>genere</strong> che per  tipo di <strong>arrangiamento</strong>. <br> <br> 
      Le canzoni create sono 11 e focalizzano i momenti salienti e i personaggi principali della storia:
      </p>

      <ul>
        <li>Il Mondo di Pierino</li>
        <li>Squadra e quaderno!</li>
        <li>Mà e Pà</li>
        <li>Corri Zampetta</li>
        <li>nonna lilli</li>
        <li>Il Bullo</li>
        <li>L'uccello</li>
        <li>Amiche......</li>
        <li>Liù Liù Liù</li>
        <li>Il Bruco</li>
        <li>VOLA VIA</li>
        <li>Guarda un po' più in su</li>
      </ul>
      <p>
      Di sequito tre esempi cantati da bambini selezionati tra i miei alunni:  
      </p>

      <h2 class="subtitle">Il Mondo di Pierino - (pop)</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499329/pierino-bici_yh3xld.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497304/IL-MONDO-DI-PIERINO_zgusef.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 

      <h2 class="subtitle">Corri Zampetta - (orchestrale)</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499522/corri-zampetta_oa1ukd.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497263/CORRI-ZAMPETTA_eppnfp.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 

      <h2 class="subtitle">Il Bruco - (jazz)</h2>
      <div class="video-box">
           <video   poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670499930/bruco-solo-scontornato_oggw9v.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670497257/IL-BRUCO_ijynnj.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
      </div> 

      <p>Ogni canzone ha la sua versione karaoke, di seguito un esempio</p>

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

ul{
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: bold;
  li{
    list-style: none;
    text-align: center;
    font-size: .8rem;
  }
}
</style>
<template>
  <div>
    <div class="inner">
      <h1>il target</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick right">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670677915/iphone-g6beee468d_1280_hkrnk1.jpg" alt="">
      </button>
        La <strong>web-app </strong>(fruibile sia da smartphone che da computer tramite codice univoco presente nel libro cartaceo), espone contenuti differenti se si ha acquistato la versione "Family" piuttosto che la versione "School". <br>
        <h4>Con la versione "Family" si può accedere a:</h4>
        <ul>
          <li>Vieo del concerto con Claudio Bisio come narratore</li>
          <li>Audiolibro con la voce di Claudio Bisio</li>
          <li>Audio presentazione dei personaggi</li>
          <li>Canzoni versione cantata con testo scorrevole</li>
          <li>Canzoni versione karaoke con testo scorrevole</li>
          <li>Acesso, tramite QR code presente nel libro cartaceo, di tutti i contenuti multimediali</li>
        </ul><br>

        <h4>Con la versione "School" si può accedere a:</h4>
        <ul>
          <li>Tutti i contenuti presenti nella versione "Family"</li>
          <li>Copione (fruibile tramite app e/o scaricabile) del "Musical di Pierino e il Bruco"</li>
          <li>Musiche di scena azionabili in parallelo alla visione del copione</li>
          <li>"Gobbo" in sincrono con le musiche di scena</li>
          <li>Coreografie canzoni e movimenti scenici</li>
          <li>Indicazioni per le scenografie</li>
          <li>Partitura semplificata per orchestra di ragazzini delle scuole medie</li>
        </ul>


      </p>
    </div>
    </div>
    
    
    
  </div>
</template>

<script>
import {store} from '../data/store'
export default {
  name: 'Libro',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style>

</style>
<template>
  <div>
    <div class="inner">
      <h1>Il libro</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick right">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670359346/Copertina-pierino_q312z6.jpg" alt="">
      </button>
        La prima edizione del libro è uscita nel 2018 come self-publishing mantenendo quindi tutti i diritti. &Egrave; un libro cartonato illustrato 20 x 20 cm. <br> <br>
        Oltre alla storia illustrata contine le schede didattico/storico degli strumenti utilizzati per i personaggi. 
        Tramite un link, dove inserire un codice univoco, è possibile scaricare l'audiolibro e molti matiriali (spartiti, musiche, testi...). <br> <br>
        <strong>La prossima edizione</strong> del libro prevede molta più interattività con una stretta aderenza ad una <strong>web-app</strong> dalla quale si può accedere a tutti i <strong>contenuti multimediali</strong>. <br> 
        Tutte le musiche saranno facilmente ascoltabili tramite un <strong>QR code</strong> presente in pagina. <br>
        Il libro cartaceo è quindi previsto come <strong>supporto all' <router-link class="internal-link" :to="{name: 'app'}">app</router-link></strong> che avrà <strong>contenuti differenti</strong> se indirizzata alla <strong>famiglia</strong> piuttoso che alle <strong>scuole</strong>. <br><br>
        <a class="internal-link" target="_blank" href="https://drive.google.com/file/d/1wEnORiUtUhYWoC6t1TlR5JOmCs4Dmi73/view?usp=sharing">Scarica il PDF della prima edizione del libro</a>
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
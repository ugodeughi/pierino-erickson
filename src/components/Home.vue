<template>
  <div>
    <div class="inner">
      <h1>PRESENTAZIONE</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259843/pierino-bici.jpg" alt="">
      </button>
      <strong>Pierino e il Bruco</strong> è un’opera musicale che negli intenti educativi didattici si rifà a Pierino e il lupo di Prokof’ev attualizzandone i contenuti. <br> Gli strumenti musicali che entrano in gioco appartengono sia alla cultura occidentale sia alle tradizioni di popoli e regioni differenti del mondo, specchio della nostra <strong>società multiculturale</strong>. <br> La storia di Pierino e il Bruco racconta di come il giovane protagonista, ingenuo sognatore, viva le sue esperienze a scuola e in famiglia. Lo vedremo sfuggire alla prepotenza di alcuni compagni, vivere i suoi primi amori e le situazioni tipiche della sua età, fino ad acquisire una maggiore <strong>consapevolezza di sé</strong> e del mondo che lo circonda arrivando ad essere l'<strong>eroe</strong> di un finale tutto da scoprire. <br> <strong>Parole</strong>, <strong>musiche e disegni </strong>si intrecciano tra loro nel procedere della narrazione diventando anche materiale per un <strong>musical</strong>. <br> Pierino e il Bruco, oltre ad essere uno strumento di intrattenimento utile all’educazione musicale porta con sé numerosi <strong>strumenti didattici</strong> (schede di approfondimento, spartiti semplificati per bambini e altro) e veicola anche <strong>contenuti educativi</strong> affrontando il tema del <strong>bullismo</strong>, della <strong>fiducia in se stessi</strong>, e del <strong>valore del diverso</strong>. <br> &Egrave; quindi <strong>uno strumento formativo completo</strong> declinabile in diverse modalità.
      </p>
    </div>
    </div>
    
    
    
  </div>
</template>

<script>
import {store} from '../data/store'
export default {
  name: 'Home',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style>

</style>
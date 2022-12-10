<template>
  <div>
    <div class="inner">
      <h1>la storia</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick right">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670260037/farfalla_advvhz.jpg" alt="">
      </button>
      Pierino, ragazzo intelligente ma con la testa fra le nuvole, viene preso in giro dai compagni di classe. E’ sempre chiuso nel suo mondo, si sente incompreso e poco sicuro di sé.<br>
In particolare Pierino è preso di mira da un trio di <strong>bulletti</strong> e da <strong>tre ragazzine</strong>. I primi lo sottopongono a scherzi e angherie di ogni genere, mentre le seconde fanno le smorfiosette e lo snobbano; solo una ragazzina, <strong>Liù</strong>, lo guarda ogni tanto con dolcezza e lo sostiene. <br><br>
A scuola la<strong> professoressa</strong> sgrida spesso Pierino perché è distratto e a casa i<strong> genitori</strong> non gli prestano alcuna attenzione perché troppo impegnati a litigare tra di loro.<br>
L’unico conforto viene da <strong>nonna Lilli</strong> (non la sua vera nonna, ma un'anziana vicina di casa di origini arabe), che si prende cura di lui e lo spinge ad avere fiducia in se stesso raccontando una storia nella storia.<br><br>
In una delle sue solitarie uscite in bici al parco, Pierino salva un <strong>bruco</strong> indifeso dalle grinfie di un <strong>uccellino</strong> antipatico e affamato. Nasce così un legame tra il ragazzino e il piccolo bruco. Pierino lo porta via con sé e, quando la madre gli vieta di tenerlo in casa, decide di nasconderlo in un posto sicuro nella scuola. <br>
Ad un certo punto avviene un fatto grave ed imprevisto all'interno della scuola che Pierino risolve  grazie alla sua sensibiiltà e viene così riconosciuto da tutti per il suo vero valore diventendo lui stesso, in qualche modo, <strong>farfalla</strong>.
      </p>
     
    </div>
    </div>
    
    
  </div>
</template>

<script>
import {store} from '../data/store'
export default {
  name: 'Storia',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style>

</style>
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
In particolare, Pierino è preso di mira da un trio di compagni di classe e da tre ragazzine. I primi lo sottopongono a scherzi e angherie di ogni genere, mentre le seconde fanno le smorfiosette e lo snobbano; solo una ragazzina, Liù, lo guarda ogni tanto con una certa dolcezza. <br>
A scuola perfino la professoressa sgrida spesso Pierino perché è distratto, e a casa i genitori non gli prestano attenzione perché troppo impegnati a litigare tra di loro.<br>
L’unico conforto viene da nonna Lilli, che si prende cura di lui e lo spinge ad avere fiducia in se stesso.<br>
In una delle sue solitarie uscite in bici al parco, Pierino salva un bruco indifeso dalle grinfie di un uccellino antipatico e affamato. Nasce così un’amicizia tra il ragazzino e il piccolo bruco. Pierino comincia a portarlo sempre con sé e, quando la madre gli vieta di tenerlo in casa, decide di nasconderlo in un posto sicuro, dietro la palestra della scuola. <br>
Alla fine della storia Pierino verrà riconosciuto da tutti per il suo vero valore diventendo anche lui, in qualche modo, farfalla.
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
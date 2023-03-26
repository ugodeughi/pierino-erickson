<template>
  <div>
    <div class="inner">
      <h1>il target</h1>
      <div>
      
      <button class="imagebox buttonbox lined.thick right">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1679824488/fuori_scuola_tvnpx4.jpg" alt="">
      </button>

      <h4>Famiglie</h4>
      <p>
        L'intero <strong>progetto</strong> è pensato per famiglie con bambini di età compresa fra i <strong>7 e 11 anni</strong> e per le scuole.<br>
        Il bambino può essere in gradi di <strong>leggere il libro</strong> e di <strong>ascoltare e vedere i contenuti multimediali </strong> tramite l'<strong>app</strong> <router-link class="internal-link-light" :to="{name: 'app'}">[vedi]</router-link>. persente sullo smartphone (loro o dei genitori).<br>
        I contenuti sono in ogni caso validi e fruibilili, tramite il supporto dei genitori, anche per bambini di <strong>età prescolare</strong>. <br>
      </p>

      <h4>Scuole</h4>
      <p>
        Le <strong>scuole primarie </strong>possono gestire i contenuti multimediali tramite la <strong>versione web</strong> accessibile tramite browser e quindi con l'ausilio di una lavagna lim.
      </p>

      <p>
        Gli <strong>istituti comprensivi</strong>, quindi con la presenza sia della scuola primaria che secondaria di primo grado, pessono organizare un evento di fine anno dove i bambini delle elementari recitano e cantano <strong>il musical</strong> <router-link class="internal-link-light" :to="{name: 'musical'}">[vedi]</router-link>.  e i ragazzini delle medie compongono l'orchestra usifruendo degli sparetiti semplificati pensati sia per scuole medie a indirizzo nermale oppure, di livello più alto, ape le media a indirizzo musicale
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
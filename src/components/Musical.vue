<template>
  <div>
    <div class="inner">
      <h1>il musical</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick right">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670684066/musical_cr4rkh.jpg" alt="">
      </button>
        Il progetto del musical è pensato in una duplice versione, una <strong>semplificata per le scuole</strong> <router-link class="internal-link-light" :to="{name: 'target'}">[vedi il target]</router-link> e una  <strong>prettamente teatrale</strong> con artisti professionisti e coro di bambini. <br><br>
        La <strong>versione per le scuole</strong> prevede una narrazione snella e leggera, interamente recitata dai bambini (immaginando un gruppo classe di circa 20 alunni) e una scenografia essenziale realizzabile nelle ore scolastiche con materiali poveri. <br><br>
        I bambini saranno tutti <strong>vestiti di nero</strong> (come i mimi teatrali) e ciacuno avrà il suo zainetto molto colorato contenete alcuni elementi scenici.  I diversi personaggi saranno caratterizzati da semplici <strong>oggetti simbolici</strong> colorati (cravatta del papà, grembiule della mamma, occhialini della maestra ecc...). <br><br>
        &Egrave; molto importante che ci sia una <strong>distribuzione equa dei ruoli</strong> per i bambini. <br> Per evitare che ci siano bambini che rimangono esclusi dalla recitazione e per sottolineare che in ognuno di noi esiste un "Pierino", il personaggio di <strong>Pierino</strong> verrà a rotazione <strong>interpretato da tutti i bambini</strong>. <br><br>
        Le parti cantate sono tutte corali e correlate da semplici <strong>movimenti</strong> e/o <strong>body-percussion</strong>. Essendo pensate come dei <strong>"quadri"</strong> al di fuori del flusso narrativo, i bambini usciranno dal personaggio togliendosi ogni accessorio e interpretando tutti insieme il <strong>"personaggio coro"</strong>. <br>
      </p>

      <h3 class="materiale">Materiale fornito</h3>
      <p>Accedento all'<strong>app</strong> <router-link class="internal-link-light" :to="{name: 'app'}">[vedi]</router-link> come scuola si avrà la possibilità di accedere al seguente materiale:</p>
      <ul>
        <li>Copione con riferimenti scenici</li>
        <li>Istruzioni (corredate di disegni esemplificativi) per la scenografia</li>
        <li>Indicazioni per i costumi</li>
        <li>Gestione interattiva delle musiche in relazione allo svolgersi delle azioni</li>
        <li>Gobbo</li>
        <li>Schede e video per le coreografie delle canzoni</li>
        <li>Testi e spartiti delle canzoni</li>
      </ul>

      <h3 class="materiale">Materiale acquistabile separatamente ai fini dello spettacolo</h3>
      <ul>
        <li>Spartiti e partitura semplificata per orchestra di ragazzini delle scuole medie</li>
        <li>Sagome autoportanti dei personaggi con i disegni originali a grandezza naturale</li>
        <li>Maglietta nera con logo di Pierino e il Bruco per la divisa del coro</li>
        <li>Zainetto colorato da tutti i disegni della storia </li>
        <li>Quaderni con copertina personalizzati da illustrazioni originali</li>
        <li>Elementi scenografici</li>
      </ul>
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

<style lang="scss" scope>
.materiale{
  margin-top: 40px;
}
</style>
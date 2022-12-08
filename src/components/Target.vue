<template>
  <div>
    <div class="inner">
      <h1>A chi è rivolto</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick right">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670359409/catena_umana_o5trxx.jpg" alt="">
      </button>
        L'idea del progetto è nata più di 20 anni fa quando insegnavo <strong>Educazione Musicale</strong> presso le scuole medie e, facendo ascoltare Pierino e il Lupo ai ragazzini di prima, per insegnare gli strumenti musicali, ho pensato che sarebbe stato bello avere una <strong>storia contemporanea</strong> per fare conoscere altra musica e altri strumenti. <br>
        La mia passione per la musica del mondo mi ha portato a traferire in questa storia, in musica, la realtà <strong>multiculturale</strong> della nostra società veicolando quindi anche altri constenuti oltre a quelli musicali. 
        È nata quindi un'opera musicale dove non ci sono confini di stile. La musica <strong>classica</strong> si fonde con le <strong>musiche del del mondo</strong>, col <strong>jazz</strong> e col <strong>pop</strong>. <br>
        Il debutto è avvenuto nel 2013 presso il <strong>Conservatorio G. Verdi di Milano</strong> con un'orchestra multiculturale e <strong>Claudio Bisio</strong> come Narratore. <br>
        Successivamente abbiamo stampato il <strong>libro cartaceo</strong> con la possibilità di scaricare l'<strong>audiolibro</strong> <br>
        In sono nate le <strong>Canzoni per i bambini e Pierino e il Bruco</strong> è stato protagonista di tanti <strong>progetti nelle scuole primarie</strong> e campus estivi realizzando sia piccoli spettacoli di fine anno ma anche eventi più grandi con il conivolgimento fin a 200 bambini sul palco riscontrando sempre grande passione e coinvolgimento da parte dei bambini, insegnanti e famiglie. <br>
        Durante il lockdown, non potendo entrare finiscamente nelle scuole, ho pensato che sarebbe stato utile uno strumento che rendesse autonome le maestre nel poter realizzare l'intero preogetto anche senza avere specifiche competenze musicali. <br>
        È nata quindi la <strong>chiavetta</strong> ossia uno strumento completo da poter utilizzare in classe per conivolgere i bambini nella storia, farli cantare sulle basi, stampare i disegni da colorare, stampare il copione smpliticato per i bambini e ascoltare la storia raccontata da Claudio Bisio. <br>
        Recentemente ho tenuto un <strong>corso di formazione</strong>, per la ASL di Bari, per <strong>educatori</strong>, <strong>psicologi per l'infazia</strong> e <strong>insegnanti di sostegno</strong> mostrando come utilizzare Pierino e il Bruco in progetti educativi con una forte attenzione anche alle disabilità e all'autismo nello specifico. <br>

      </p>
      <h3>Progetti futuri</h3>
      <p>Dopo una ormai esperiaza decennale 'sul campo' è nato l desiderio di creare un verio e proprio <strong>Musical di Pierino e il Bruco</strong> con aggiunta di canzoni, <strong>musice sceniche e coreografie</strong>, da proporre nelle scuole da farlo realizzare ai bambini fornendo alle maestre <strong>uno strumemnto completo</strong>, tramite web-app (fruibile sia da pc che da smartphone ) come supporto alla sua realizzazione e <strong>messa in scena</strong>. Musical che poi avrà anche una versione teatrale pensata per professionisti e coro di bambini. <a class="internal-link" href="#">Scopri di più</a> <br>
      Oltre al musical, il libro cartaceo avrà nelle pagine dei codici QR per poter ascoltare tutte le parti musicali. <a class="internal-link" href="#">Scopri di più</a> 
      </p>
    </div>
    </div>
    
    
    
  </div>
</template>

<script>
import {store} from '../data/store'
export default {
  name: 'Target',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style>

</style>
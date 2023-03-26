<template>
  <div>
    <div class="inner">
      <h1>Il progetto</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670671305/stefano_corradi.jpg" alt="">
      </button>
        Sono Stefano Corradi e l'idea del progetto nasce più di 20 anni fa quando, insegnando <strong>Educazione Musicale</strong> presso le scuole medie e facendo ascoltare Pierino e il Lupo ai ragazzini, ho pensato che sarebbe stato importante avere una <strong>storia contemporanea</strong> creata apposta per far conoscere strumenti e musiche di diverse culture e tradizioni. <br><br>
        La mia passione per la <strong>musica del mondo</strong> mi ha portato a trasferire in questa storia la realtà <strong>multiculturale</strong> della nostra società, veicolando quindi anche altri contenuti oltre a quelli musicali. 
        È nata quindi un'opera  dove non ci sono confini di stile; la musica <strong>classica</strong> si fonde con la <strong>world-music</strong>, col <strong>jazz</strong> e col <strong>pop</strong>. <br> <br>
        Il debutto è avvenuto nel 2013 presso il <strong>Conservatorio G. Verdi di Milano</strong> con un'orchestra multiculturale con grandi solisti e <strong>Claudio Bisio</strong> come narratore. 
        Successivamente è uscito il <strong>libro cartaceo</strong> con la possibilità di scaricare l'<strong>audiolibro</strong>. <br>
        In seguito sono nate le <strong>canzoni per i bambini</strong> e di conseguenza Pierino e il Bruco è diventato il protagonista di tanti miei <strong>progetti nelle scuole primarie</strong> e campus estivi. <br><br>Ho realizzato sia piccoli spettacoli a dimensione classe sia  eventi più grandi con il coinvolgimento fino a 200 bambini su un palco, riscontrando sempre grande partecipazione, passione e coinvolgimento da parte di alunni, insegnanti e famiglie. <br>
        Durante il lockdown, non potendo entrare fisicamente nelle scuole, ho pensato che sarebbe stato utile uno strumento che rendesse autonome le maestre nel poter realizzare l'intero preogetto anche senza avere specifiche competenze musicali. <br>
        È nata quindi una <strong>chiavetta</strong> ossia lo strumento completo da poter utilizzare in classe per coinvolgere i bambini nella storia, farli cantare sulle basi musicali, stampare i disegni da colorare, avere il copione semplificato e per ascoltare la storia raccontata da Claudio Bisio. <br><br>
        Recentemente ho tenuto un <strong>corso di formazione</strong>, per la ASL di Bari, per <strong>educatori</strong>, <strong>psicologi dell'infazia</strong> e <strong>insegnanti di sostegno</strong>, mostrando loro come utilizzare Pierino e il Bruco in progetti educativi con una forte attenzione anche alle disabilità e nello specifico all'autismo. <br>

      </p>
      <h3>PROGETTI FUTURI</h3>
      <p>Dopo un'esperiaza decennale 'sul campo' è nato il desiderio di creare anche un vero e proprio <strong>Musical di Pierino e il Bruco</strong> con aggiunta di canzoni, <strong>musiche sceniche e semplici coreografie</strong> da proporre nelle scuole, fornendo alle maestre <strong>uno strumemnto completo</strong> tramite web-app (fruibile sia da pc che da smartphone ) come supporto alla sua realizzazione e <strong>messa in scena</strong>. <br>Un musical che poi avrà estensione anche in una <strong>versione teatrale</strong>  per professionisti e coro di bambini. 
      <router-link class="internal-link" :to="{name: 'musical'}">scopri di più</router-link> <br><br>
      Oltre al musical, il libro cartaceo avrà nelle pagine dei <strong>codici QR</strong> per poter ascoltare tutte le parti musicali.
      <router-link class="internal-link" :to="{name: 'libro'}">scopri di più</router-link>
      </p>
    </div>
    </div>
    
    
    
  </div>
</template>

<script>
import {store} from '../data/store'
export default {
  name: 'Progetto',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style>

</style>
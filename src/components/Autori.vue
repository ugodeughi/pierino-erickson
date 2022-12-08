<template>
  <div>
    <div class="inner">
      <h1>Stefano corradi <span> - progetto, musiche, sviluppo software</span> </h1>
      <div>
        <p>
        <button class="imagebox buttonbox lined.thick left">
          <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259870/stefano_zm1r6o.jpg" alt="">
        </button>
        <strong>Musicista / programmatore / coach</strong>, diplomato al Conservatorio in clarinetto nel 1988. <br>
        Ha una grande esperienza di insegnamento della musica in <strong>scuole medie</strong> statali e private, scuole superiori a <span>indirizzo socio pedagogico</span>, <strong>progetti musicali nella scuola primaria</strong> e insegamento dello strumento sia a bambini che adulti.<br>
        <strong>Programmatore web full-stack</strong> da più di 20 anni affianca l'attività artistica e di formatore a qualla di programmatore free lance, attento allo svilupo delle nuove tecnologie e mezzi di comunicazione digitali.<br>
        Ha anche una grande <strong>eperienza concertistica e di teatro musciale</strong> (6 anni di collaborazione e tourneé con <strong>Moni Ovadia</strong> scrivendo spesso le <strong>musiche di scena</strong> ) e come formatore aziendale tiene <strong>teambuilding musicali</strong> portando la <strong>metafora della musica</strong> in ambiti aziendali.<br>
        Attualmente, oltre all'attività artistco-musicale, è <strong>Main Teacher Full-Stack</strong> presso la Web Academy Boolean s.r.l.
        </p>
      </div>
      <h1>laura rossi <span> - testo</span> </h1>
      <div>
        <p>
        <button class="imagebox buttonbox lined.thick right">
          <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259934/laura_lmd32c.jpg" alt="">
        </button>
        <strong>Laureata in filosofia</strong>, ha una <strong>lunga esperienza nell’insegnamento</strong> di storia e filosofia nei licei scientifici
di Milano. Nel contempo coltiva l’altra grande passione: il teatro.<br> Ha frequentato la <strong>Masterclass al
Piccolo Teatro di Milano</strong> e ha approfondito il valore educativo e formativo del teatro. Matura
esperienze come <strong>attrice</strong> prima e come <strong>aiutoregista</strong> e <strong>regista</strong> in seguito.<br> Conduce <strong>laboratori teatrali</strong> per ragazzi e per adulti e <strong>pubblica L’identità e la maschera</strong>, Signorelli Editore sulla figura femminile in
Casa di bambola di H. Ibsen e Ciascuno a suo modo di L. Pirandello.<br>
Entrata in contatto con il mondo aziendale, ha utilizzato la metodologia teatrale nei percorsi
formativi, decidendo poi di dedicarsi a tempo pieno alla <strong>consulenza con attività di formazione e
sviluppo delle persone</strong> in contesti organizzativi di tutti i settori.<br>
E’ diventata <strong>coach professionista</strong> con certificazione della International Coaching Federation, a
seguito della quale ha integrato l’attività di formazione con quella di coaching in medie e grandi
italiane.
        </p>
      </div>
      <h1>jacopo ziliotto <span> - illustrazionni</span> </h1>
      <div>
        <p>
        <button class="imagebox buttonbox lined.thick left">
          <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259934/jacopo_fksin4.jpg" alt="">
        </button>
        Ha condotto studi come  <strong>storico dell’Arte e fumettista</strong>. Alle attività di <strong>cartoonist</strong>, <strong>illustratore</strong>, <strong>visualizer e graphic simplificator</strong> ha affiancato quella di esperto di sintesi e comunicazione in generale (storytelling) e di performer live .<br> E’ autore e <strong>realizzatore di video disegnati per tutto il mondo</strong> ricevendo premi come migliori presentazioni. <br>E’ stato <strong></strong> per la cerimonia delle <strong>Paraolimpiadi di Sochi</strong>.<br><br>
        </p>
      </div>
      <h1>Anna Mazzola <span> - coreografie, scenografie, illustrazioni</span> </h1>
      <div>
        <p>
        <button class="imagebox buttonbox lined.thick right">
          <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670262252/WhatsApp_Image_2022-12-01_at_12.09.22_ns3fia.jpg" alt="">
        </button>
        <strong>Architetto artistico / performer / pittrice</strong>, diploma di <strong>liceo artistico</strong> e <strong>laurea in architettura</strong> al Politecnico di Milano. <br>Dopo un periodo di attività in ateneo in qualità di ricercatrice ed assistente, da vent’anni progetta e <strong>personalizza ambienti interni</strong> ed <strong>esterni</strong> creando arredi, scenografie ed <strong>installazioni</strong> di suo design.<br> È <strong>visual merchandiser</strong> presso punti vendita di Verbania. <br> La sua formazione trentennale di danza classica con <strong>Diploma Royal Academy of Dance(Londra)</strong>  e stage di perfezionamento presso la <strong>Steps on Broadway (New York)</strong>, teatro danza e cabaret le ha permesso di compiere recentemente l’esperienza come insegnante del metodo SDF di <strong>Carolyn Smith</strong>.<br> Ha esperienza con i bambini grazie ad esperienze di gioco-danza presso scuole private di Milano. È istruttrice base del <strong>Metodo Zilgrei-Respirazione Dinamica</strong>. <br> Fondatrice, con il maestro Stefano Corradi, del progetto <strong>Ensemble Art Music Gallery</strong> ed ideatrice del linguaggio non verbale OLTREDANZAE, due iniziative in crescita atte a favorire la coesione sociale e la <strong>comunicazione attraverso l’arte per valorizzare l’unicità</strong>.
        </p>
      </div>
    </div>
    
    
    
  </div>
</template>

<script>
import {store} from '../data/store'

export default {
  name: 'Autori',
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
}
</script>

<style>

</style>
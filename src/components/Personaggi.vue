<template>
  <div>
    <div class="inner">
        <swiper  :pagination="{
                type: 'progressbar',
              }"
              :navigation="true"
              :modules="modules"
              @slideChange="onSlideChange"
            >
            
      <swiper-slide> 
 
          <p>
            Come in Pieirno e il Lupo, anche in Pierino e il Bruco ad ogni ogni personaggio corrisponde uno strumento e un tema musicale tipico di quello specifico strumento. <br>
            Ascoltali e guarda lo spartito!
          </p>
       
      </swiper-slide>
            
      <swiper-slide> 
        <div class="video-box">
           <video id="fisa" poster="/img/fisa.png" controls>
            <source src="/video/Tema-Pierino.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Pierino</strong> - fisarmonica</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="tenore"  poster="/img/tenore.png" controls>
            <source src="/video/Tema-Bruco.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Il Bruco</strong> - Sax Tenore</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="arpa"  poster="/img/arpa.png" controls>
            <source src="/video/Tema-Liu.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Liù</strong> - Arpa Celtica</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="oud"  poster="/img/oud.png" controls>
            <source src="/video/Tema-Nonna-Lilli.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Nonna Lilli</strong> - Oud arabo</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="tromba"  poster="/img/tromba.png" controls>
            <source src="/video/Tema-Prof.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>La Prof</strong> - Tromba con sordina</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="percussioni"  poster="/img/percussioni.jpg" controls>
            <source src="/video/Tema-Bulli.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>I compagni si classe</strong> - Pecussioni</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="flauto"  poster="/img/flauto.png" controls>
            <source src="/video/Tema-Ragazzine.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Le compagne si classe</strong> - Flauto a Becco</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="sezione-fiati"  poster="/img/sezione-fiati.jpg" controls>
            <source src="/video/Tema-Genitori.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>I genitori</strong> - Sezione Fiati</div>
        </div> 
      </swiper-slide>
    </swiper>
    </div>
    
  </div>

  


</template>

<script>

import {getPathVideo} from '../data/functions'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name: 'Personaggi',
    components: {
      Swiper,
      SwiperSlide,
    },
  data(){
    return{
      getPathVideo,
      videoName : 'Tema-Pierino',
      slides:[
        'fisa', 'tenore', 'arpa', 'oud', 'tromba', 'percussioni', 'flauto'
      ]
    }
  },
  methods:{
    onSlideChange(){
      this.slides.forEach( sl => {
        const video = document.querySelector("#" + sl);
        video.pause();
      })
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
}
</script>

<style lang="scss" scoped>
.play{
  cursor: pointer;
  &:hover{
    color: brown;
  }

}
.video-box{

  display: flex;
  flex-direction: column;
  align-items: center;
  video{
    width: 70%;
  }
}

.swiper-slide{
  padding-top: 20px;
  p{
    padding: 100px 50px;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
  }
}

</style>
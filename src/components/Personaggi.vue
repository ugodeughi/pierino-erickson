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
           <video id="fisa" poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670260037/fisa_amvfbe.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250934/Tema-Pierino_yeuwwz.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Pierino</strong> - fisarmonica</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="tenore"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259897/tenore_jg4gwy.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250789/Tema-Bruco_r4nsis.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Il Bruco</strong> - Sax Tenore</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="arpa"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670260091/arpa_bijcd4.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250933/Tema-Liu_rfulhp.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Liù</strong> - Arpa Celtica</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="oud"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259923/oud_bwdtif.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250933/Tema-Nonna-Lilli_l2upmw.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Nonna Lilli</strong> - Oud arabo</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="tromba"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259897/tromba_edkam0.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250933/Tema-Prof_trrv5i.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>La Prof</strong> - Tromba con sordina</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="percussioni"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259909/percussioni_lfaonz.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250933/Tema-Bulli_pjvnqa.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>I compagni si classe</strong> - Pecussioni</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="flauto"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670260037/flauto_i1n49d.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250935/Tema-Ragazzine_uwcpoj.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>Le compagne si classe</strong> - Flauto a Becco</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="sezione-fiati"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670259896/sezione-fiati_h5ipjk.jpg" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670250934/Tema-Genitori_l8dkob.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>I genitori</strong> - Sezione Fiati</div>
        </div> 
      </swiper-slide>

      <swiper-slide> 
        <div class="video-box">
           <video id="sezione-fiati"  poster="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670260994/uccellaccio_mljkss.png" controls>
            <source src="https://res.cloudinary.com/dwgi34gx1/video/upload/v1670251002/Tema-Uccellino_bmcgl3.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          <div><strong>L' uccellino</strong> - Ciaramella</div>
        </div> 
      </swiper-slide>



    </swiper>
    </div>
    
  </div>

  


</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import {store} from '../data/store'

export default {
  name: 'Personaggi',
    components: {
      Swiper,
      SwiperSlide,
    },
  data(){
    return{
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
  mounted(){
    if(!store.logged) this.$router.push({name: 'login'})
  }
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
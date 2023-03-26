<template>
  <div>
    <div class="inner">
      <h1>login</h1>
      <div>
      <p>
      <button class="imagebox buttonbox lined.thick left">
        <img src="https://res.cloudinary.com/dwgi34gx1/image/upload/v1670429542/immagine_con_scritta_trasp_ducqdb.png" alt="">
      </button>
      <strong>Inserire la password </strong>
      <input @keyup.enter="checkPsw()" v-model.trim="inputPsw" type="password" placeholder="Password">
      <button @click="checkPsw()" class="send">Invia</button>
      <span class="error">{{error}}</span>
      </p>
    </div>
    </div>
    
    
    
  </div>
</template>

<script>

import {store} from '../data/store'

export default {
  name: 'Login',
  data(){
    return{
      inputPsw: '',
      error:'',
      store
    }
  },
  methods:{
    checkPsw(){
      if(!store.psws.includes(this.inputPsw)){
        this.error = "Attenzione! Password non corretta"
      }else{
        store.logged = true;
        store.psw = this.inputPsw;
        this.$router.push({name: 'home'})
      }
      setTimeout( () => {
        this.error = '';
      }, 3000)
    }
  },
  mounted(){
    if(store.logged) this.$router.push({name: 'home'})
  }
}
</script>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

strong, input, button{
  display: block;
  margin: 20px 50px;
}
button{
  margin-bottom: 0px;
}
input{
  padding: 7px 15px;
  border-radius: 10px;
  background-color: rgba(255,255,255,.6);
}

button.send{
  padding: 10px 20px;
  border: none;
  background-color: $primary-color;
  color: white;
  border-radius: 10px;
  transition: all .3s;
  cursor: pointer;
  &:hover{
    opacity: .8;
  }

}
span{
    color: brown;
    font-size: .9rem;
  }
.inner{
  padding-bottom: 80px;
}
</style>
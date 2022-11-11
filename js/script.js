const {createApp } = Vue;


createApp({

  data(){
    return{
      title: 'Ajax',
      email: '',
    }
  },
  methods:{
    getApi(){

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( risultato => {
        this.email = risultato.data.response
      })
      .catch( errore => {
        this.title = errore.code
        console.log(errore.code);
      })

    }
      
  },
  mounted(){
    
    this.getApi();
    
  }

}).mount('#app');
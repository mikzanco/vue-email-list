const { createApp } = Vue;

createApp({

  data(){
    return {
      title: 'Ajax',
      emailList: '',

    }
    
  },
  methods:{
      getApi(){
        // inserisco la url dell'API,
        // creo arrpw function nel then che risponde quando lo stato della chimata è positivo e da quindi 200 
        this.emailList = [];

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( risultato =>{
          console.log(risultato.data);
          this.emailList.push(result.data.response);

        })
        return this.getApi(++this.count);
      }
  },
  mounted(){
    this.getApi();
  },
  created(){

  }
}).mount('#app');








// const {createApp } = Vue;


// createApp({

//   data(){
//     return{
//       // title: 'Ajax',
//       // email: '',
//     }
//   },
//   methods:{
//     getApi(){

//       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//       .then( risultato => {
//         console.log(risultato);
//         // this.email = risultato.data.response
//       })
//       // .catch( errore => {
//       //   this.title = errore.code
//       //   console.log(errore.code);
//       // })

//     }
      
//   },
//   mounted(){
    
//     this.getApi();
    
//   }

// }).mount('#app');
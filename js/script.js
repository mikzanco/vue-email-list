const { createApp } = Vue;

createApp({

  data(){
    return {
      title: 'Ajax Email',
      emailList: '',

    }
    
  },
  methods:{
      getApi(){
        
        
        this.emailList = [];
        for(let i = 1; i <= 10; i++){
          // inserisco la url dell'API in get,
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
           // creo un arrow function nel then che risponde quando lo stato della chimata è positivo e da quindi 200 
            .then( result =>{
             console.log(result.data);
            //  vado a tampare i dati che mi arrivano 
             this.emailList.push(result.data.response);
            })
        }
        
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
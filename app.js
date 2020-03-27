new Vue({
  el: '#app',

   data () {
     return {
       name: 'Bitcoin',
       img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
       changePercent : 1,

       price:8400,

       pricesWithDays: [
         { day: 'Lunes', value: 8400 },
         { day: 'Martes', value: 8401 },
         { day: 'Miercoles', value: 564165 },
         { day: 'Jueves', value: 418910 },
         { day: 'Viernes', value: 321 }
       ],

       showPrices: false
     }
   },

   methods: {
     toggleShowPrices () {
       this.showPrices = !this.showPrices
     }
   }
})
new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 1,

            value: 0,

            color: 'f4f4f4',

            price: 8400,

            pricesWithDays: [{
                    day: 'Lunes',
                    value: 8400
                },
                {
                    day: 'Martes',
                    value: 8401
                },
                {
                    day: 'Miercoles',
                    value: 564165
                },
                {
                    day: 'Jueves',
                    value: 418910
                },
                {
                    day: 'Viernes',
                    value: 321
                }
            ],

            showPrices: false
        }
    },

    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },

        covertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.price
        }
    },

    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            this.color = this.color.split('')
                .reverse().join('')
        }
    }
})
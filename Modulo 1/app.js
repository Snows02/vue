Vue.component('CoinDetail', {
    props: ['coin'],

    data() {
        return {
            showPrices: false,
            value: 0
        }
    },

    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`
        },

        covertedValue() {
            if (!this.value) {
                return 0
            }
            return this.value / this.coin.price
        }
    },

    created () {
        console.log('Created child');
    },

    mounted() {
        console.log('Mounted child');
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            // Para emitir un evento que se comnunique con el padre
            this.$emit('change-color')
        }
    },

    template: `
    <div>
        <img 
            v-on:mouseover="toggleShowPrices"
            v-on:mouseout="toggleShowPrices"
            v-bind:src="coin.img" v-bind:alt="coin.name"
        >
        <h1 
            v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
            {{ title }}
            <span v-if="coin.changePercent > 0">Subio</span>
            <span v-else-if="coin.changePercent < 0">Bajo</span>
            <span v-else>Estable</span>

            <span v-on:click="toggleShowPrices">
                {{ showPrices ? 'Ocultar precios' : 'Ver precios' }}
            </span>
        </h1>

        <input type="number" name="" id="" v-model="value">
        <span> {{ covertedValue }}</span>

        <slot name="text"></slot>
        <slot name="link"></slot>

        <ul v-show=showPrices>
            <li class="uppercase"
                v-bind:class="{ orange: p.value == coin.price, green: p.value > coin.price, red: p.value < coin.price }"
                v-for="(p, ind) in coin.pricesWithDays" v-bind:key="p.day">
                {{ind}} - {{p.day}} - {{ p.value }}
            </li>
        </ul>
    </div>
    `
})


new Vue({
    el: '#app',

    data() {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 0,
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
            },
            color: 'f4f4f4',
        }

    },

    created () {
        console.log('Created');
    },

    mounted() {
        console.log('Mounted');
    },



    computed: {

    },

    // watch: {
    //     showPrices(newVal, oldVal) {
    //         console.log(newVal, oldVal)
    //     }
    // },

    methods: {
        updateColor() {
            this.color = this.color
            .split('')
            .reverse()
            .join('')
        }
    }
})
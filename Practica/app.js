new Vue({
    el: '#app',

    data() {
        return {
            title:'',

            time:0,

            total:true, 

            courses: [{
                    title: 'Django',
                    time: 1
                },
                {
                    title: 'Git y Github profesional',
                    time: 0
                }
            ],
        }
    },

    computed: {
        totalTime() {
            var total = 0
            for (let i = 0; i < this.courses.length; i++) {
                const element = this.courses[i];
                total = total + element.time
            }
            if (total === 0) {
                this.total =  false
            } else {
                this.total = true
                return total
            }
        }
    },

    methods: {
        addCourse () {
            this.courses.push({ title: this.title, time: this.time })
        }
    }
})
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const app = new Vue({
    el: '#app',
    data: {
        emailList: [], 
    },
    methods: {
        generateEmailList: (self) => {
            console.log(this);
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((responseObj) => {
                    if (!self.emailList.includes(responseObj.data.response)) {
                        self.emailList.push(responseObj.data.response);
                    }else {
                        index--;
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
                .then(function() {
                    console.log('cosa fa questo');
                })
            }
        }

    },
    mounted: function() {
        this.generateEmailList(this);
    }
});



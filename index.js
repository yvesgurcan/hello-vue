Vue.component('test', {
    props: ['myprop'],
    template: '<b>YOUR INPUT: {{myprop}}</b>'
})

function teste (that) {
    this.items = that.items.map(function(item) {
        item.value = item.value.split('').reverse().join('')
        return item
    })
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: false
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        items: [
            {id: 1, value: "yay!"},
            {id: 2, value: "yo!"},
            {id: 3, value: "yu!"},
        ]
    },
    methods: {
        reverseMessage: function() {teste(this)}
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Gimme input',
        input: 'some placeholder there for ya'

    },
    methods: {
        showMeInput: function() {
            console.log(this.input)
        }
    }
})
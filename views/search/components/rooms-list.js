
var moment = require('moment-timezone')

module.exports = {

    beforeCompile: function () {
        this.refresh(new Date())
    },

    compiled: function () {
        var $datepicker = this.$parent.$.datepicker,
            vm = this

        $datepicker.$watch('date', function (date) {
            vm.refresh(date)
        })
    },

    data: function () {
        return {
            isLoading: true,
            rooms: []
        }
    },

    methods: {
        refresh: function (date) {
            var vm = this

            /*require('superagent')
                .post('https://challenges.1aim.com/roombooking/getrooms')
                .set('Content-Type', 'application/json')
                .withCredentials() // Enables CORS requests
                .send(JSON.stringify({ date: 'today' }))
                .end(function (res) {
                    console.log(res)
                })*/

            vm.isLoading = true
            setTimeout(function () {
                vm.rooms = require('./rooms.json')

                console.log('Retrieving rooms for: ', moment(date).unix())

                vm.isLoading = false
            }, 1000)
        }
    },

    template: require('./rooms-list.jade'),

    replace: true

}
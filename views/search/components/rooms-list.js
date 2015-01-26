
var Vue = require('vue'),
    moment = require('moment-timezone'),
    not = require('101/not'),
    isString = require('101/is-string')

module.exports = {

    beforeCompile: function () {
        this.refresh('today')
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

    computed: {
        filters: function () {
            return this.$parent.$.filters.$data
        }
    },

    methods: {
        refresh: function (date) {
            var vm = this

            if(date !== 'today') {
                date = moment(date).unix()
            }

            vm.isLoading = true
            require('superagent')
                .post('https://challenges.1aim.com/roombooking/getrooms')
                .send(JSON.stringify({ date: date }))
                .end(function (res) {
                    vm.rooms = res.body

                    Vue.nextTick(function () {
                        vm.isLoading = false
                    })
                })
        },

        startBooking: function (index) {
            this.$root.$emit('room:selected', this.rooms[index])
        }
    },

    template: require('./rooms-list.jade'),

    replace: true

}